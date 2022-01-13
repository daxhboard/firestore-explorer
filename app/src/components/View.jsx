import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function View(props) {
  return (
    <div className={`${props.className} text-left`}>
      <Container fluid>
        <Row>
          <Col xs={12} sm={12} md={12} lg={4} xl={4}></Col>
          <Col>{props.children}</Col>
          <Col xs={12} sm={12} md={12} lg={4} xl={4}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default View;
