import React from "react";
import "./SingleDocument.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function SingleDocument() {
  return (
    <Card>
      <Card.Header>
        <Container fluid>
          <Row>
            <Col xs={1} sm={1} md={1} lg={1} xl={1}>
              <i className="far fa-file-alt fs"></i>
            </Col>
            <Col xs={10} sm={10} md={10} lg={10} xl={10}>
              5MqujsAMo1CvtqY6YEg2
            </Col>
            <Col
              xs={1}
              sm={1}
              md={1}
              lg={1}
              xl={1}
              style={{ textAlign: `right`, float: `right` }}
            >
              <button className="border-0">
                <i className="fa fa-ellipsis-v"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default SingleDocument;
