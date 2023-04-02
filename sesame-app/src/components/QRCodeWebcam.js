import { useState } from 'react';
import QrReader from 'react-qr-reader';
import { Switch } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';


const QRCodeWebcam = () => {
  const [webcamResult, setWebcamResult] = useState();
  const webcamError = (error) => {
    if (error) {
      console.log(error);
    }
  };
  const webcamScan = (result) => {
    if (result) {
      setWebcamResult(result);
    }
  };

  const StyledSwitch = styled(Switch) ({
   
   
    '& .MuiSwitch-switchBase.Mui-checked': {
        color: '#916BFF',
    },

    '& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track': {
        backgroundColor: '#916BFF',
    
    },
  });
  

  

  return (
    <div style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginBottom: '80px'}}>
        
        
        <div style={{
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            textAlign: 'center', 
            margin: '16px', 
            gap: '8px',
            }}>
            <Avatar sx={{ width: '16px', height: '16px', bgcolor: '#A057FE', fontSize: '10px', marginTop: '16px' }}>
                i
            </Avatar>
            
            <span className='label-dark'>Scan QR Code to receive your digital bill.</span>
        
        
        </div>

     
        <QrReader
                delay={300}
                onError={webcamError}
                onScan={webcamScan}
                legacyMode={false}
                style={{width: '80%',maxWidth: '400px'}}                
                facingMode={'environment'}
        />

        <FormControlLabel
          control={<StyledSwitch defaultUnchecked />}
          label={<span className='label-dark'>Show my QR Code</span>}
          sx={{margin: '24px'}}
        />

        
      <div>
        <h6>{webcamResult}</h6>
      </div>

    </div>
  );
};

export default QRCodeWebcam;
