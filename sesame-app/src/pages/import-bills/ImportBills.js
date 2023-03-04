import React from 'react';
import SesameBottomNavigation from '../../components/SesameBottomNavigation';
import PropTypes from 'prop-types';

function ImportBills({ value, handleChange }) {
    return (
        <div>
            <h1 className='App-header'>Add Bills</h1>
            {/* Page content */}
            <SesameBottomNavigation value={value} onChange={handleChange} />
        </div>
    );
}

ImportBills.propTypes = {
    value: PropTypes.number.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default ImportBills;