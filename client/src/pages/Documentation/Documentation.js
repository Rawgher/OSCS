import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Documentation from "../../components/Documentation";

class DocumentationPage extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Documentation />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DocumentationPage;
