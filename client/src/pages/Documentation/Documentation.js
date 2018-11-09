import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Documentation from "../../components/Documentation";
import Sidebar from "../../components/Sidebar";
import Chat from "../../components/Chat";
import NavTabs from "../../components/Nav";
import Background from "../../components/Background";

class DocumentationPage extends Component {
  render() {
    return (
      <Container fluid>
        <Background />
        <Row>
          <Col size="md-12">
            <NavTabs auth={this.props.auth} />
          </Col>
        </Row>
        <Row>
          <Col size="md-12" id="EGA-documentationPageMain">
            <Documentation />
          </Col>
        </Row>
        <Sidebar />
        <Chat />
      </Container>
    );
  }
}

export default DocumentationPage;
