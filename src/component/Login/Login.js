import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Facebook from '@material-ui/icons/Facebook';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';





const Login = () => {

    if (!firebase.apps.length) {
     firebase.initializeApp(firebaseConfig);
    }else {
   firebase.app(); 
}
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })
    
    
    const handleGoogleSignIn = () => {
     firebase.auth()
  .signInWithPopup(googleProvider)
  .then((result) => {
    var credential = result.credential;
    var token = credential.accessToken;
    var user = result.user;
    console.log(user, 'user click')
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log(errorCode, errorMessage, email, credential)
  });
    }

    const handleFacebookSignIn = () => {
    firebase
  .auth()
  .signInWithPopup(fbProvider)
  .then((result) => {
    var credential = result.credential;
    var user = result.user;
    var accessToken = credential.accessToken;
    console.log(user, 'fb sign in')
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log(errorCode, errorMessage, email, credential)
  });
    }

    const handleSubmit = () => {

    }
    
    const handleBlur = (event) => {
        let isFormValid;
        if(event.target.name === 'email'){
            isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
        }
        if(event.target.name === 'password'){
            const isPasswordValid = event.target.value.length > 5;
            const passwordHasNumber = /\d{1}/.test(event.target.value);
            isFormValid = isPasswordValid && passwordHasNumber;
        }
        if(isFormValid){ 
            const newUserInfo = {...user};
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo)
        }
};
    return (
        <div className="form-container">
            <h3>Create an account</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" onBlur={handleBlur} placeholder="Name" required/>
                <br/>
                <input type="email" name="email" id="" onBlur={handleBlur} placeholder="Username or Email" required/>
                <br/>
                <input type="password" name="password" id="" onBlur={handleBlur} placeholder="Password" required/>
                <p className="password-warning"><small>* At least 5 digits, 1 number required. </small></p>
                <br/>
                <input type="password" name="confirm-password" id="" onBlur={handleBlur} placeholder="Confirm Password" required/>
                <input type="submit" value="Create an account" className="submit"/>
                <p>Already have an account? <Link className="login-small" to="/login-management">Login</Link></p> 
            </form>
            <div className="form-bottom">
                <p><hr/> Or <hr/></p>
                <button onClick={handleFacebookSignIn} className="facebook-btn"><Facebook color="primary"></Facebook>  Continue with Facebook</button>
                <br/>
                <button onClick={handleGoogleSignIn}  className="google-btn">Continue with Google</button>
            </div>
            
        </div>
    )
 };

export default Login;