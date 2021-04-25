import React from 'react';
import './DestinationInfo.css';

const DestinationInfo = () => {
    return (
        <div className="destination-container">
            <form action="" className="destination-info">
                <p>Pick From</p>
                <input type="text" name="" placeholder="Mirpur 1" id=""/>
                <p>Pick To</p>
                <input type="text" name="" placeholder="Dhanmondi" id=""/>
                <br/>
                <input type="submit" value="Search" className="search-btn"/>
            </form>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.5118692353008!2d90.35315271481625!3d23.800390584564816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c135b300e601%3A0x4e91dba279841654!2zU29ueSBDaW5lbWEgSGFsbCB8IOCmuOCmqOCmvyDgprjgpr_gpqjgp4fgpq7gpr4g4Ka54Kay!5e0!3m2!1sen!2sbd!4v1619376272079!5m2!1sen!2sbd" style={{border:0, width: '400px', height:'300px'}}>
            </iframe>
        </div>
    );
};

export default DestinationInfo;