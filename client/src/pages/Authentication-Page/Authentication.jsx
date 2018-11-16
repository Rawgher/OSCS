import React, { Component } from "react";
import "../../components/Auth2/App.css";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
// import NavigationPanel from '../../components/Auth2/NavigationPanel';
import Modal from "../../components/Auth2/Modal";
import Background from "../../components/Background";

class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false
    };
  }

  componentDidMount() {
    this.setState({ mounted: true });
  }

  handleSubmit = e => {
    this.setState({ mounted: false });
    e.preventDefault();
  };

  render() {
    const { mounted } = this.state;

    let child;

    if (mounted) {
      child = (
        <div className="Auth_test">
          {/* <NavigationPanel></NavigationPanel> */}
          <Modal
            updateUser={this.props.updateUser}
            onSubmit={this.handleSubmit}
          />
        </div>
      );
    }

    return (
      <div className="Authentication">
        <Background />
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {child}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default Authentication;

// import React from "react";
// import TransitionGroup from "react-transition-group";
// import LoginBox from "../../components/Auth/Login";
// import RegisterBox from "../../components/Auth/Register";
// import Background from "../../components/Background";
// import { Container, Col, Row } from "../../components/Grid";
// import Fade from "../../components/Transitions/Fade/Fade";

// class Authentication extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoginOpen: true,
//       isRegisterOpen: false,
//       showPassword: false
//     };
//   }

//   showLoginBox() {
//     this.setState({ isLoginOpen: true, isRegisterOpen: false });
//   }

//   showRegisterBox() {
//     this.setState({ isRegisterOpen: true, isLoginOpen: false });
//   }

//   render() {
//     return (
//       <Container>
//         <Background />
//           <Row>
//             <Container>
//               <Row>
//                 <div
//                   className={
//                     "controller " +
//                     (this.state.isLoginOpen ? "selected-controller" : "")
//                   }
//                   onClick={this.showLoginBox.bind(this)}
//                 >
//                   Login
//                 </div>
//                 <div
//                   className={
//                     "controller " +
//                     (this.state.isRegisterOpen ? "selected-controller" : "")
//                   }
//                   onClick={this.showRegisterBox.bind(this)}
//                 >
//                   Register
//                 </div>
//               </Row>
//               <Fade isOpen={this.state.isLoginOpen} duration={500}>
//                 <LoginBox
//                   className="box-container"
//                   updateUser={this.props.updateUser}
//                 />
//               </Fade>
//               <Fade isOpen={this.state.isRegisterOpen} duration={500}>
//                 <RegisterBox className="box-container" />
//               </Fade>
//             </Container>
//           </Row>
//       </Container>
//     );
//   }
// }

// export default Authentication;
