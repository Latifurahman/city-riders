import React, { useEffect, useState } from 'react';
import ridersData from '../data/data.json';

const Home = () => {
    const [riders, setRiders] = useState([]);
    useEffect(() =>{
        setRiders(ridersData);
        console.log(ridersData)
    }, []);
    return (
        <div>
            <h1>this is home {riders.name}</h1>
        </div>
    );
};

export default Home;