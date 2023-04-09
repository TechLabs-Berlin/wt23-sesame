import React, { useRef } from 'react';
import Webcam from 'react-webcam';

const videoConstraints = {
  width: 540,
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
    <div>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Webcam
          ref={webcamRef}
          audio={false}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
          onUserMedia={onUserMedia}
        />

        <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
          <button onClick={capturePhoto}>Capture</button>
          <button onClick={() => setUrl(null)}>Refresh</button>
        </div>
        
        {url && (
          <div style={{ marginTop: "20px" }}>
            <img src={url} alt="Screenshot" />
          </div>
        )}
      
      </div>
    
    </div>
  );
};

export default Camera;
