import React from 'react';
import SesameBottomNavigation from '../../components/SesameBottomNavigation';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';



function YourBills({ value, handleChange }) {
    return (
        <div>
            <h1 className='app-header'>Your Bills</h1>

            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="Weekly View" value={0} />
                    <Tab label="Monthly View" value={1} />
                    <Tab label="Tab 3" value={2} />
                </Tabs>
            </Box>
            <Box sx={{ marginTop: 2, padding: 2, bgcolor: 'background.paper' }}>
                <h2>Chart Title</h2>
                <p>Chart description goes here</p>

            </Box>


            {/* Page content */}
            <SesameBottomNavigation value={value} onChange={handleChange} />
        </div>
    );
}

YourBills.propTypes = {
    value: PropTypes.number.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default YourBills;