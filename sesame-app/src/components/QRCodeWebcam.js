import { blue } from '@mui/material/colors';
import { useState } from 'react';
// install this library in terminal: npm install react-qr-reader @2.2.1 --force
import QrReader from 'react-qr-reader';


const QRCodeWebcam = () => {
    const [webcamResult,setWebcamResult] = useState();
    const webcamError = (error) => {
        if (error) {
            console.log(error);
        }
    };
    const webcamScan = (result) => {
        if (result) {
            setWebcamResult(result);
        }
    }
    return (
        <div>
        <div>
            <h3>Hold QR in red square</h3>
        </div>
      <div>
      <QrReader
        delay={300}
        onError={webcamError}
        onScan={webcamScan}
        legacyMode={false}
        style={{ width: '100%' }}
        facingMode={"environment"}
        />
    </div>
    <div >
        <h6>{webcamResult}</h6>
    </div>
    </div>
  );
};

export default QRCodeWebcam;