import React from 'react';
import SesameBottomNavigation from '../../components/SesameBottomNavigation';
import PropTypes from 'prop-types';
import QRCodeWebcam from '../../components/QRCodeWebcam';
import { Tabs, Tab } from '@mui/material';
import QrCodeIcon from '@mui/icons-material/QrCode';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Camera from '../../components/Camera';



function ImportBills({ value, handleChange }) {
   
    const [selectedTab, setSelectedTab] = React.useState(0);
  
    const handleTabChange = (event, newValue) => setSelectedTab(newValue);

    const singleTabStyles = {
        textTransform: 'none',
        fontSize: '14px',
        fontWeight: 400,
        color: 'white',
        width: 'auto',
        padding: '8px 32px',
        justifyContent: 'center', 
        
        
        '& .MuiSvgIcon-root': {fontSize: '24px'},


        '&.Mui-selected': {
            color: 'white',
            '& .MuiSvgIcon-root': {color: '#37FAD3'},
        },
        
    };

    const tabsStyles = {
        background: '#232D2F', 
        justifyContent: 'center',
        margin: '8px',
        '& .MuiTabs-flexContainer': {justifyContent: 'center',},
        '& .MuiTabs-indicator': { backgroundColor: '#37FAD3'},
        
   

    };

    
    return (
        <div>
            
            <section className="app-header">
                <h1>Add Bills</h1>
            </section>

      
            <Tabs value={selectedTab} onChange={handleTabChange}  sx={{ ...tabsStyles }}>
                <Tab icon={<QrCodeIcon />} label="QR Code"  sx={{ ...singleTabStyles }} />
                <Tab icon={<AddAPhotoIcon />} label="Import" sx={{ ...singleTabStyles }} /> 
            </Tabs>
            
            
                {selectedTab === 0 && <QRCodeWebcam />}
            
                
                {selectedTab === 1 && <Camera />}
           
               
            <SesameBottomNavigation value={value} onChange={handleChange} />

        </div>
    );
}

ImportBills.propTypes = {
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default ImportBills;