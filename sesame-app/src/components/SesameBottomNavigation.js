import React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { AccountCircle, AddBox, MoreHoriz, ReceiptLong } from '@mui/icons-material';
import { Link, } from 'react-router-dom';
import './SesameBottomNavigation.css'


function SesameBottomNavigation({ value, onChange }) {
    return (
        <StyledEngineProvider injectFirst>
            <div className='bottom-nav-container'>
                <BottomNavigation
                    value={value}
                    onChange={onChange}

                //className='bottom-nav' ?Do I need this className?
                >
                    <BottomNavigationAction
                        label="Add"
                        icon={<AddBox />}
                        component={Link} to="/"
                    />

                    <BottomNavigationAction
                        label="Bills"
                        icon={<ReceiptLong />}
                        component={Link} to='/your-bills' />

                    <BottomNavigationAction
                        label="Profile"
                        icon={<AccountCircle />}
                        component={Link} to='/profile' />

                    <BottomNavigationAction
                        label="More"
                        icon={<MoreHoriz />} />
                </BottomNavigation>
            </div >
        </StyledEngineProvider>
    );
}

export default SesameBottomNavigation;