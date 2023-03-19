import React from 'react';
import SesameBottomNavigation from '../../components/SesameBottomNavigation';
import PropTypes from 'prop-types';



function Account({ value, handleChange }) {
    return (
        <div>
            <section className="app-header">
                <h1>Account</h1>
            </section>

            {/* Page content */}
            <SesameBottomNavigation value={value} onChange={handleChange} />
        </div>
    );
}

Account.propTypes = {
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default Account;