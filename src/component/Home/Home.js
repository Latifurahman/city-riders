import React, { useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import mainImg from '../images/city.jpg';
import './Home.css';
import ridersData from '../data/data.json';
import Riders from '../Riders/Riders';

const Home = () => {
    const [riders, setRiders] = useState([]);
    useEffect(() =>{
        setRiders(ridersData);
    }, [])

    return (
        <div>
           <Navbar expand="lg" className="navbar">
                <div className="container">
                    <Navbar.Brand  className="text-warning logo" href="/home">City Riders</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                     <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link className="text-white" href="/home">Home</Nav.Link>
                            <Nav.Link className="text-white" href="/destination">Destination</Nav.Link>
                            <Nav.Link className="text-white" href="/blog">Blog</Nav.Link>
                            <Nav.Link className="text-white" href="/contact">Contact</Nav.Link>
                            <Nav.Link className="text-white active" href="/login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
            <div className="main-img">
                    <img src={mainImg} className="img-fluid" alt=""/>
                    <div className="riders">
                        {
                    riders.map(rider => <Riders rider={rider}></Riders>)
                    }
                    </div>
                    
                </div>
                
        </div>
    );
};

export default Home;