import React from "react";
import TransitionGroup from "react-transition-group";
import LoginBox from "../../components/Auth/Login";
import RegisterBox from "../../components/Auth/Register";
import Background from "../../components/Background";
import { Container, Col, Row } from "../../components/Grid";
import Fade from "../../components/Transitions/Fade/Fade";

class Authentication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false,
      showPassword: false
    };
  }

  showLoginBox() {
    this.setState({ isLoginOpen: true, isRegisterOpen: false });
  }

  showRegisterBox() {
    this.setState({ isRegisterOpen: true, isLoginOpen: false });
  }

  render() {
    return (
      <Container>
                <Background />
        <Col size="sm-12">
          <Row>
            <div
              className={
                "controller " +
                (this.state.isLoginOpen ? "selected-controller" : "")
              }
              onClick={this.showLoginBox.bind(this)}
            >
              Login
            </div>
            <div
              className={
                "controller " +
                (this.state.isRegisterOpen ? "selected-controller" : "")
              }
              onClick={this.showRegisterBox.bind(this)}
            >
              Register
            </div>
          </Row>

          <Row>
            <Container>
              <Fade isOpen={this.state.isLoginOpen} duration={500}>
                <LoginBox className="box-container" updateUser={this.props.updateUser} />
              </Fade>
              <Fade isOpen={this.state.isRegisterOpen} duration={500}>
                <RegisterBox className="box-container" />
              </Fade>
            </Container>
          </Row>
        </Col>
      </Container>
    );
  }
}

export default Authentication;
