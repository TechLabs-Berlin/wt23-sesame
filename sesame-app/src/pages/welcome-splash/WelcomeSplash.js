//You need to import React at the top of every js file
import React from 'react';
import logo from '../../assets/sesame-logo.svg'


// Import CSS file
import './WelcomeSplash.css';

function WelcomeSplash() {
    return (
        <div className="welcome-splash-container">
            <img src={logo} alt="Logo" className="logo" />
        </div>
    );
}

export default WelcomeSplash;