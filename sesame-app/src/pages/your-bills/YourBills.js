import React from 'react';
import SesameBottomNavigation from '../../components/SesameBottomNavigation';
import Box from '@mui/material/Box';
import { Tabs, Tab } from '@mui/material';
import PropTypes from 'prop-types';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WeeklySpendings from '../../components/WeeklySpendings';
import MonthlySpendings from '../../components/MonthlySpendings';
import RefreshIcon from '@mui/icons-material/Refresh';
import IconButton from '@mui/material/IconButton';


  function YourBills({ value, onChange }) {

    const [selectedTab, setSelectedTab] = React.useState(0);
  
    const handleTabChange = (event, newValue) => setSelectedTab(newValue);
    
    //settings for refresh-icon
    const [refresh, setRefresh] = React.useState(false);

    const handleRefresh = () => {
        setRefresh(true);
        setTimeout(() => {
          setRefresh(false);
          window.location.reload();
        }, 1000);
      };

    const singleTabStyles = {
        textTransform: 'none',
        fontSize: 12,
        fontWeight: 500,
        color: '#818485',
        minHeight: '32px', //need to set minHeight, as it was 48px per default
        height: '32px',
        minWidth: '70px',
        padding: '8px',
        borderRadius: '8px',
        '& .MuiSvgIcon-root': {fontSize: '20px'},


        '&.Mui-selected': {
            color: 'transparent',
            backgroundImage: 'linear-gradient(to right, #A057FE, #916BFF)',
            WebkitBackgroundClip: 'text',
            //boxShadow: '0px 0px 10px rgba(161, 88, 255, 0.3)',
            '& .MuiSvgIcon-root': {color: '#8F66FF'},
        },
        
    };

    const tabsStyles = {
        minHeight: '32px', 
        background: 'white', 
        borderRadius: '8px', 
        padding: '4px', 
        gap: '8px', 
        '& .MuiTabs-indicator': { backgroundColor: '#635ee7'}

    };
    


    return ( 
        <div>
            
            <section className="app-header" >
                <h1>Your Bills</h1>
                 {/*refresh icon*/}
                <IconButton aria-label="refresh" onClick={handleRefresh} sx= {{color:'#8F66FF'}}>
                    <RefreshIcon/>
                </IconButton>
            </section>
            

            

            {/*tab bar*/} 
            <Box sx={{ display: 'flex', justifyContent: 'center', padding: '8px 8px 24px' }}>
                <Tabs value={selectedTab} onChange={handleTabChange}  sx={{ ...tabsStyles }}>
                    <Tab label="Weekly View" sx={{ ...singleTabStyles,  }} />
                    <Tab label="Monthly View" sx={{ ...singleTabStyles }} />
                    <Tab icon={<CalendarMonthIcon />}  sx={{ ...singleTabStyles}} />                
                </Tabs>
            </Box>


            {/*tab bar selected*/} 
            {selectedTab === 0 && (
                <Box sx={{ padding: '8px 24px' }}>
                    <WeeklySpendings />
                </Box>
            )}

            {selectedTab === 1 && (
                <Box sx={{ padding: '8px 24px' }}>
                    <MonthlySpendings />
                </Box>
            )}

        

            <SesameBottomNavigation value={value} onChange={onChange} />
        </div>
    );
}

YourBills.propTypes = {
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default YourBills;
