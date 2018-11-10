import React from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Card from "../../components/Card";
import "./About.css";

class About extends React.Component {
  state = {
    open: false
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12 sm-12 xs-6">
            <div id="EGA-aboutSite">
              <h1>About the Site</h1>
            </div>
          </Col>
        </Row>

        <Row>
          <Col size="md-12 sm-12 xs-6">
            <div id="EGA-teamContainer">
              <h1>The Team</h1>
              <Card>Elaine</Card>
              <Card>Enea</Card>
              <Card>Roger</Card>
              <Card>Jordan</Card>
              <Card>Collin</Card>
              <Card>Celia</Card>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-12 sm-12 xs-6">
            <form>
              <label>
                Name:
                <input type="text" name="name" />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
