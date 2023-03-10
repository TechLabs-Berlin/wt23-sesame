import React from 'react';
import SesameBottomNavigation from '../../components/SesameBottomNavigation';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { textTransform } from '@mui/system';




  function YourBills({ value, handleChange }) {
    const [selectedTab, setSelectedTab] = React.useState(0);
  
    const handleTabChange = (event, newValue) => {
      setSelectedTab(newValue);
    };

    const customTheme = createTheme({
        typography: {
          fontSize: 12,
          // Set your desired font size here
        },
      });

    return (
        <div>
            <h1 className='app-header'>Your Bills</h1>
  
            <ThemeProvider theme={customTheme}>
            <Box sx={{ width: '100%', }}>
                <Tabs value={selectedTab} onChange={handleTabChange} centered>
                    <Tab label="Weekly View" value={0} sx={{ textTransform: "none" }}/>
                    <Tab label="Monthly View" value={1} sx={{ textTransform: "none" }}/>
                    <Tab icon={<CalendarMonthIcon />} aria-label="calendar" />
                
                </Tabs>
            </Box>
            <Box sx={{ color: 'black', marginTop: 2, padding: 2, bgcolor: 'background.paper' }}>
                <h2>Chart Title</h2>
                <p>Chart description goes here</p>

            </Box>
            </ThemeProvider>

            {/* Page content */}
            <SesameBottomNavigation value={value} onChange={handleChange} />
        </div>
    );
}

YourBills.propTypes = {
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default YourBills;