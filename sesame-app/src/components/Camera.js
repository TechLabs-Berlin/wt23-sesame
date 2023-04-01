import { color } from "framer-motion";
import React, {useRef } from "react";
import Webcam from "react-webcam";
 
const videoConstraints = {
  width:540,
  facingMode: "environment"
};
 
const Camera = () => {
  const webcamRef = useRef(null);
  const [url, setUrl] = React.useState(null);
 
  const capturePhoto = React.useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
  }, [webcamRef]);
 
  const onUserMedia = (e) => {
    console.log(e);
  };
 
  return (
    <>
      <Webcam
        ref={webcamRef}
        audio={false}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        onUserMedia={onUserMedia}
      />
      <div style={{marginLeft: 'auto',
                       padding: '5px 5px',
                       display: 'flex',
                       flexDirection: 'row-reverse' ,
                       gap: '10px',
                     }}>
      <button onClick={capturePhoto}>Capture</button>
      <button onClick={() => setUrl(null)}>Refresh</button>
      </div>
      {url && (
        <div style={{display: 'flex', justifyContent: 'center', marginBlock: '20%'}}>
          <img src={url} alt="Screenshot" />
        </div>
      )}
    </>
  );
};
 
export default Camera;