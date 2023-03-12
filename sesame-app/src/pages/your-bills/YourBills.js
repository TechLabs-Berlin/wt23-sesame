import React from 'react';
import SesameBottomNavigation from '../../components/SesameBottomNavigation';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';



  function YourBills({ value, handleChange }) {
    const [selectedTab, setSelectedTab] = React.useState(0);
  
    const handleTabChange = (event, newValue) => {
      setSelectedTab(newValue);
    };

    return (
        <div>
            <section className="app-header">
                <h1>Your Bills</h1>
            </section>

            {/*tab bar*/} 
            <Box sx={{backgroundColor: '#232D2F', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Tabs value={selectedTab} onChange={handleTabChange} sx={{borderRadius: 2}}>
                    <Tab label="Weekly View" value={0} sx={{ backgroundColor: 'white', textTransform: "none", fontSize: 12,}}/>
                    <Tab label="Monthly View" value={1} sx={{ backgroundColor: 'white', textTransform: "none", fontSize: 12, }}/>
                    <Tab icon={<CalendarMonthIcon />} aria-label="calendar" sx={{backgroundColor: 'white' }}/>
                
                </Tabs>
            </Box>

            <YourBillsSpendings/>

            <Box sx={{ color: 'black', marginTop: 2, padding: 2, bgcolor: 'background.paper' }}>
                <h2>Chart Title</h2>
                <p>Chart description goes here</p>

            </Box>

            {/* Find SesameBottomNavigation under src/components/SesameBottomNavigation.js */}
            <SesameBottomNavigation value={value} onChange={handleChange} />
        </div>
    );
}

YourBills.propTypes = {
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default YourBills;