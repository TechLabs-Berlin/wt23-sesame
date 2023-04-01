import React from 'react';
import { styled } from "@mui/material/styles";
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { AccountCircle, AddBox, MoreHoriz, ReceiptLong } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

const StyledBottomNavigationAction = styled(BottomNavigationAction)({
  color: 'white',
  gap: '6px', 
  padding: '8px 0px 24px',

  '&& .MuiBottomNavigationAction-label': {
    fontSize: '13px',
  },

  '& .MuiSvgIcon-root': {
    width: '30px',
    height: 'auto',
  },
  
  '&.Mui-selected':{ 
    //cannot set icon color with: background: 'linear-gradient(180deg, #57EEAF 0%, #26FFE5 100%)'
    color: '#37FAD3',
  },


  
});


function SesameBottomNavigation() {

  const location = useLocation();
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <BottomNavigation sx={{
        bottom: '0', 
        position: 'fixed', 
        width: '100%', 
        height: '96px',
        borderTop: '1px solid #E4E4E4', 
        backgroundColor: '#232D2F', 
      }}    
      showLabels 
      value={location.pathname.replace('/', '') || 'import-bills'}  
      >
        

        <StyledBottomNavigationAction 
            label='Add Bill'
            icon={<AddBox />}
            component={Link} to='/import-bills'
            value='import-bills'
            />

        <StyledBottomNavigationAction
            label='Bills'
            icon={<ReceiptLong />}
            component={Link} to='/your-bills'
            value='your-bills'
            />

        <StyledBottomNavigationAction
            label='Account'
            icon={<AccountCircle />}
            component={Link} to='/account'
            value='account'
            />

        <StyledBottomNavigationAction
            label='More'
            icon={<MoreHoriz />}
            value='more'
        />
      </BottomNavigation>
    </div>
  );
}


export default SesameBottomNavigation;
