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
    <div style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginBottom: '40px'}}>
        
        

        <FormControlLabel
          control={<StyledSwitch defaultUnchecked />}
          label={<span className="switch-label">Show my QR Code</span>}
          sx={{margin: '24px'}}
        />

     
        <QrReader
                delay={300}
                onError={webcamError}
                onScan={webcamScan}
                legacyMode={false}
                style={{width: '80%', height: '100%'}}                
                facingMode={'environment'}
            />

        <Avatar sx={{ width: '20px', height: '20px', bgcolor: '#A057FE', fontSize: '14px', marginTop: '24px' }}>
            i
        </Avatar>
            
        <p style={{textAlign: 'center', margin: '8px', color:'#232D2F', fontSize: '12px'}}>
        Scan QR Code to receive your digital bill.
        </p>

       
      

      <div>
        <h6>{webcamResult}</h6>
      </div>
    </div>
  );
};

export default QRCodeWebcam;
