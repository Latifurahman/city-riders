import React, { useEffect, useState } from 'react';
import ridersData from '../data/data.json';
import Riders from '../Riders/Riders';
import './Home.css';

const Home = () => {
    const [riders, setRiders] = useState([]);
    useEffect(() =>{
        setRiders(ridersData);
        console.log(ridersData)
    }, []);
    return (
        <div className="riders-container">
            {
                riders.map(rider => <Riders rider={rider}></Riders>)
            }
        </div>
    );
};

export default Home;