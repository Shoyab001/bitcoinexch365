import React from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";


const headerindex = () => {
  return (
    <Container style={{ padding: "0px" }}>
      <div>
        <Row className="header">
          <Col xs={5} className="head">
            <h1>Getting started with Bitcoinexch365</h1>
            <p className="summery">
              Using Bitcoin to transact is easy and accessible to everyone.
            </p>
          </Col>
          <Col className="headerimg" >
            <img src='/bg.png' style={{}}></img>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default headerindex;
