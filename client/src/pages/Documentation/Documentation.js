import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Documentation from "../../components/Documentation";
import Sidebar from "../../components/Sidebar";
import Chat from "../../components/Chat";

class DocumentationPage extends Component {
  render() {
    return (
      <Container>
        <Sidebar />
        <Row>
          <Col size="md-12" id="EGA-documentationPageMain">
            <Documentation />
          </Col>
        </Row>
        <Chat />
      </Container>
    );
  }
}

export default DocumentationPage;
