
import './App.css';
import Image from 'react';
import React from "react";
import { Container, Row } from 'react-bootstrap';
import Webcam from "react-webcam";

function UserImage(props) {
  return (
    <div className='userimage'></div>
  );
}

function App() {
  return (
    <Container>
      <Row>
        <img class="slogan" src={process.env.PUBLIC_URL + 'slogan.png'}></img>
      </Row>
    </Container>
  );
}

export default App;
