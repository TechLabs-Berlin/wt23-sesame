import React from 'react';
import SesameBottomNavigation from '../../components/SesameBottomNavigation';
import PropTypes from 'prop-types';

function ImportBills({ value, handleChange }) {
    return (
        <div>
        
            <section className="app-header">
            <h1>Add Bills</h1>
            </section>
        
            {/* Page content */}
            <SesameBottomNavigation value={value} onChange={handleChange} />
        </div>
    );
}

ImportBills.propTypes = {
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default ImportBills;