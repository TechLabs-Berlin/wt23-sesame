import React from 'react';
import SesameBottomNavigation from '../../components/SesameBottomNavigation';
import PropTypes from 'prop-types';
import LogIn from '../../components/LogIn';
import SignIn from '../../components/SignIn';



function Account({ value, handleChange }) {
    return (
        <div>
            
            <section className="app-header">
                <h1>Account</h1>
            </section>

            <LogIn/>
            <SesameBottomNavigation value={value} onChange={handleChange} />
        </div>
    );
}

Account.propTypes = {
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default Account;