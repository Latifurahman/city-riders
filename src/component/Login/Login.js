import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })
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
            const newUserInfo = [...user];
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }
    }
    return (
        <div className="form-container">
            <h3>Create an account</h3>
            <p>email: {user.email}</p>
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
            </div>
            
        </div>
    );
};

export default Login;