import React from 'react';
import SesameBottomNavigation from '../../components/SesameBottomNavigation';
import PropTypes from 'prop-types';
import QRCodeWebcam from '../../components/QRCodeWebcam';
import { Tabs, Tab } from '@mui/material';
import Box from '@mui/material/Box';
import QrCodeIcon from '@mui/icons-material/QrCode';
import TapAndPlayIcon from '@mui/icons-material/TapAndPlay';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Camera from '../../components/Camera';



function ImportBills({ value, handleChange }) {
   
    const [selectedTab, setSelectedTab] = React.useState(0);
  
    const handleTabChange = (event, newValue) => setSelectedTab(newValue);

    const singleTabStyles = {
        textTransform: 'none',
        fontSize: 12,
        fontWeight: 500,
        color: 'white',
        minHeight: '32px',
        height: '50px',
        minWidth: '70px',
        padding: '8px',
        borderRadius: '8px',
        margin: '10px 30px',
        
        '& .MuiSvgIcon-root': {fontSize: '30px'},


        '&.Mui-selected': {
            color: 'white',
            '& .MuiSvgIcon-root': {color: '#36d698'},
        },
        
    };

    const tabsStyles = {
        minHeight: '50px', 
        // background: 'white', 
        background: '#232D2F', 
        borderRadius: '8px', 
        padding: '4px', 
        marginBottom: '-41px',
        // gap: '20px', 
        '& .MuiTabs-indicator': { backgroundColor: '#36d698'}

    };

    /*const  SwitchLabels = () => {
        return (
          <FormGroup >
            <FormControlLabel
              style={{ color: 'white',
                       display: 'flex',
                       flexDirection: 'row-reverse' ,
                       paddingTop: '0px'
                     }}

             control={<Switch defaultUnchecked />}
             label="Show me QR Code" />
          </FormGroup>
        );
      }*/
    
    return (
        <div>
            
            <section className="app-header">
                <h1>Add Bills</h1>
            </section>

            <Box sx={{ display: 'flex', justifyContent: 'center', padding: '8px 30px 24px' }}>
                <Tabs value={selectedTab} onChange={handleTabChange}  sx={{ ...tabsStyles }}>
                    <Tab icon={<QrCodeIcon />} label="QR Code"  sx={{ ...singleTabStyles }} />                
                    <Tab icon={<AddAPhotoIcon />} label="Import" sx={{ ...singleTabStyles }} /> 
                </Tabs>
            </Box>
            
            
            <div style= {{display: 'flex',
                        flexDirection: 'column',
                        justifyContent:'center',
                        alignItems: 'center',
                        margin: '20px 0px 80px',
                        background: 'white',
                        //padding: '30px 20px 20px 20px',//
                        //borderRadius: '16px',//
                        }}>
                {selectedTab === 0 && <QRCodeWebcam />}
                {selectedTab === 1 && <Camera />}
            </div>

            {/*<SwitchLabels />*/}
               
            <SesameBottomNavigation value={value} onChange={handleChange} />
        </div>
    );
}

ImportBills.propTypes = {
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default ImportBills;