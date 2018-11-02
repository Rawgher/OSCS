import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Logo from "../../components/Logo";
import { Col, Row, Container } from "../../components/Grid";
import "./Landing.css";

class LandingPage extends Component {
  state = {
    redirect: false
  };
  routeChange = () => {
    this.setState({
      redirect: true
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/search" />;
    } else {
      return (
        <div className="EGA-landing-wrapper">
          <Container fluid>
            <Row>
              <Col size="md-12">
                <Logo routeToHomePage={this.routeChange} />
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
  }
}

export default withRouter(LandingPage);
