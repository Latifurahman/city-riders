import React from 'react';
import './Riders.css';

const Riders = (props) => {
    console.log(props)
    const {name,image} = props.rider;
    return (
        <div className="card-container">
            <div className="card">
                <img src={image} alt=""/>
            <div className="card-title">
                <h3>{name}</h3>
            </div>
            </div>
            
        </div>
    );
};

export default Riders;