import React, { Component } from "react";
import Logo from "../../components/Logo";
import { Col, Row, Container } from "../../components/Grid";

class LandingPage extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Logo />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default LandingPage;
