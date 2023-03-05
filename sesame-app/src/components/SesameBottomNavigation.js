import React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { AccountCircle, AddBox, MoreHoriz, ReceiptLong } from '@mui/icons-material';
import { Link, } from 'react-router-dom';
import './SesameBottomNavigation.css'


function SesameBottomNavigation({ value, onChange }) {
    return (

        <div className='bottom-nav-container'>
            <StyledEngineProvider injectFirst>
                <BottomNavigation
                    value={value}
                    onChange={onChange}
                >
                    <BottomNavigationAction
                        icon={<AddBox />}
                        component={Link} to="/"
                    />

                    <BottomNavigationAction
                        label="Bills"
                        icon={<ReceiptLong />}
                        component={Link} to='/your-bills' />

                    <BottomNavigationAction
                        label="Account"
                        icon={<AccountCircle />}
                        component={Link} to='/account' />

                    <BottomNavigationAction
                        label="More"
                        icon={<MoreHoriz />} />
                </BottomNavigation>
            </StyledEngineProvider>
        </div >

    );
}

export default SesameBottomNavigation;