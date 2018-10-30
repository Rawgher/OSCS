import React, { Component } from "react";
import Logo from "../../components/Logo";
import { Col, Row, Container } from "../../components/Grid";
import "./Landing.css";

class LandingPage extends Component {
  render() {
    return (
      <div className="EGA-landing-wrapper">
        <Container fluid>
          <Row>
            <Col size="md-12">
              <Logo />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default LandingPage;
