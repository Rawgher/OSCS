import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import About from "../../components/About";
import Sidebar from "../../components/Sidebar";
import Chat from "../../components/Chat";
import NavTabs from "../../components/Nav";
import Background from "../../components/Background";

class AboutPage extends Component {
  render() {
    return (
      <Container fluid>
        <Background />
        <Row>
          <Col size="md-12 sm-12 xs-6">
            <NavTabs auth={this.props.auth} />
          </Col>
        </Row>
        <Row>
          <Col size="md-12 sm-12 xs-6">
            <About />
          </Col>
        </Row>
        <Sidebar />
        <Chat />
      </Container>
    );
  }
}

export default AboutPage;
