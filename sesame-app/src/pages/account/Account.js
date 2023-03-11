import React from 'react';
import SesameBottomNavigation from '../../components/SesameBottomNavigation';
import PropTypes from 'prop-types';



function Account({ value, handleChange }) {
    return (
        <div>
            <h1 className='app-header'>Account</h1>

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