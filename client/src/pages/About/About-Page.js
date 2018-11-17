import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import About from "../../components/About";
import Sidebar from "../../components/Sidebar";
import Chat from "../../components/Chat";
import NavTabs from "../../components/Nav";
import Background from "../../components/Background";
import "./About-Page.css";

class AboutPage extends Component {
  render() {
    return (
      <Container fluid>
        <Background />
        <Row>
          <Col size="md-12 sm-12 xs-6">
            <NavTabs
              updateUser={this.props.updateUser}
              loggedIn={this.props.loggedIn}
              username={this.props.username}
            />
          </Col>
        </Row>
        <Row>
          <Col size="md-12 sm-12 xs-6">
            <About />
          </Col>
        </Row>
        <Sidebar />
        <Chat
          loggedIn={this.props.loggedIn}
          user={this.props.user}
          uid={this.props.user_id}
        />
      </Container>
    );
  }
}

export default AboutPage;
