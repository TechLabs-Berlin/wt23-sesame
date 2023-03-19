import React from 'react';
import SesameBottomNavigation from '../../components/SesameBottomNavigation';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import YourBillsSpendings from '../../components/YourBills_Spendings';



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
            <Box sx={{display: 'flex', justifyContent: 'center', padding: '8px 8px 24px' }}>
                <Tabs value={selectedTab} onChange={handleTabChange} sx={{background: '#FBFBFF', borderRadius: '8px', padding: '4px'}}>
                    <Tab label="Weekly View" value={0} sx={{ 
                        textTransform: "none", 
                        fontSize: 12, 
                        backgroundColor: selectedTab === 0 ? 'white' : 'transparent', 
                        borderRadius: '8px',
                       }}
                    />
                    <Tab label="Monthly View" value={1} sx={{ textTransform: "none", fontSize: 12, backgroundColor: selectedTab === 1 ? 'white' : 'transparent', borderRadius: '8xpx', }}/>
                    <Tab icon={<CalendarMonthIcon />} aria-label="calendar" sx={{backgroundColor: selectedTab === 2 ? 'white' : 'transparent', borderRadius: '8xpx',}}/>
                </Tabs>
            </Box>

            {/* Find YourBillsSpending under src/components/YourBill_Spendings.js */}
            <Box sx={{padding: '8px 24px'}}>
                <YourBillsSpendings/>
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