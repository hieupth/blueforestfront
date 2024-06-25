
import './App.css';
import React, { useCallback, useRef, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Webcam from "react-webcam";

function UserImage(props) {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [imgWebSrc, setImgWebSrc] = useState(null);

  function uploadFile(e) {
    setImgSrc(URL.createObjectURL(e.target.files[0]));
  }

  // create a capture function
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef]);

  function resetImage() {
    setImgSrc(null);
  }

  return (
    <Row>
      {imgSrc ? 
      (
        <Row>
          <img src={imgSrc} alt="webcam" />
          <button onClick={resetImage}>XÓA</button>
          <button>HOÀN THÀNH</button>
        </Row>
      ) : (
        <>
        {/* <img src={imgSrc} alt="abc" /> */}
        <div class='row'>
          <Webcam height={600} width={600} ref={webcamRef} />
          <button class="btn-upload-image" onClick={capture}>Chụp ảnh chân dung</button>
        </div>
        <div class='row'>
          <label for="upload-image" class="btn-upload-image">Chọn từ máy tính</label>
          <input id="upload-image" type="file" onChange={uploadFile}/>
        </div>
        </>
      )}
    </Row>
  );
}

function App() {
  return (
    <Container>
      <Row>
        <img class="slogan center" src={process.env.PUBLIC_URL + 'slogan.png'}></img>
      </Row>
      <Row>
        <UserImage></UserImage>
      </Row>
    </Container>
  );
}

export default App;
