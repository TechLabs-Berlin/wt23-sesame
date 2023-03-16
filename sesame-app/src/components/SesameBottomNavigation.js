import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { AccountCircle, AddBox, MoreHoriz, ReceiptLong } from '@mui/icons-material';
import { Link, } from 'react-router-dom';
import { styled } from "@mui/material/styles";
//import './SesameBottomNavigation.css'

const StyledBottomNavigationAction = styled(BottomNavigationAction)(() => ({
  padding: '16px 0px 32px',
  gap: '8px',
  color: 'white',
  '& .MuiSvgIcon-root': {
    fontSize: '1.5rem',
  },
  '&.Mui-selected':{ 
      background: 'linear-gradient(180deg, #57EEAF 0%, #26FFE5 100%)'
  },
}));

function SesameBottomNavigation() {

  const [value, setValue] = React.useState('recents');
  const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
  return (
    <div className='bottom-navigation-root'>
      <BottomNavigation sx={{
        bottom: '0', 
        position: 'fixed', 
        width: '100%', 
        height: '96px',

        borderTop: '1px solid #E4E4E4', 
        backgroundColor: '#232D2F', 
        color: 'white', 
      }}    
      value={value} 
      onChange={handleChange}
      >
        <StyledBottomNavigationAction sx={{color: 'white',}}
            label='Add Bill'
            icon={<AddBox />}
            component={Link} to='/import-bills'
            />

        <StyledBottomNavigationAction
            label='Bills'
            icon={<ReceiptLong />}
            component={Link} to='/your-bills'
            />

        <StyledBottomNavigationAction
            label='Account'
            icon={<AccountCircle />}
            component={Link} to='/account'
            />

        <StyledBottomNavigationAction
            label='More'
            icon={<MoreHoriz />} 
        />
      </BottomNavigation>
    </div>
  );
}


export default SesameBottomNavigation;