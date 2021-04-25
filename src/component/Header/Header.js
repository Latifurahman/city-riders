import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../images/logo.png';
import mainImg from '../images/city.jpg';

const Header = () => {
    return (
        <div className="header" style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(${mainImg})` }}>
            <nav className="nav">
                <ul>
                    <li>
                        <img className="logo" src={logo} alt=""/>
                    </li>
                     <li>
                        <Link to="/home">Home</Link>
                    </li>
                     <li>
                        <Link to="/login">Destination</Link>
                    </li>
                     <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                     <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                     <li>
                        <Link className="active" to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
            <div className="title">
                <h1>Find your ride</h1>
                <p>Our service is best in the city. It's safe and secure. We ensure your privacy.</p>
            </div>
        </div>
    );
};

export default Header;