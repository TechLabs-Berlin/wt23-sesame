import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { AccountCircle, AddBox, MoreHoriz, ReceiptLong } from '@mui/icons-material';
import './SesameBottomNavigation.css'



function SesameBottomNavigation() {

  const [value, setValue] = React.useState('recents');
  const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
  return (
    <div className='bottom-navigation-root'>
      <BottomNavigation     
      value={value} 
      onChange={handleChange}
      >
        <BottomNavigationAction
            label='Add Bill'
            icon={<AddBox />}
            />

        <BottomNavigationAction
            label='Bills'
            icon={<ReceiptLong />}
            />

        <BottomNavigationAction
            label='Account'
            icon={<AccountCircle />}
            />

        <BottomNavigationAction
            label='More'
            icon={<MoreHoriz />} 
        />
      </BottomNavigation>
    </div>
  );
}


export default SesameBottomNavigation;