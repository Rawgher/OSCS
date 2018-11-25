import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Auth.css";
import { Motion, spring } from "react-motion";
import TextField from "@material-ui/core/TextField";
import SubmitButton from "./SubmitButton";
import { Redirect } from "react-router-dom";
import { Row } from "../Grid";
import axios from "axios";

class SignExpanded extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      message: "",
      flexState: false,
      animIsFinished: false,
      redirectTo: null
    };
  }

  componentDidMount() {
    this.setState({ flexState: !this.state.flexState });
  }

  isFinished = () => {
    this.setState({ animIsFinished: true });
  };

  handleChange = event => {
    console.log("change state");
    this.setState({ [event.target.name]: event.target.value });
  };

  handleLogin = e => {
    e.preventDefault();
    console.log("handleSubmit login");

    const { username, password } = this.state;
    // console.log(username, password);
    axios
      .post("/api/auth/login", {
        user_name: username,
        user_pass: password
      })
      .then(response => {
        // console.log("login response: ", response);
        if (response.status === 200) {
          // update App.js state
          this.props.updateUser({
            loggedIn: true,
            username: response.data.user_name,
            user_id: response.data.user_id
          });
          this.setState({
            redirectTo: "/search"
          });
        }
      })
      .catch(error => {
        console.log("login error: ", error);
        this.setState({
          message: "Sorry, there appears to be an issue with your login."
        });
      });
  };

  handleSignUp = e => {
    e.preventDefault();
    console.log("sign-up, username: " + this.state.username);

    const { firstName, lastName, username, password } = this.state;
    // console.log(firstName, username, password);
    axios
      .post("api/auth/signup", {
        user_firstName: firstName,
        user_lastName: lastName,
        user_name: username,
        user_pass: password
      })
      .then(response => {
        // console.log(response);
        if (!response.data.error) {
          console.log("successful signup");
          this.props.updateUser({
            loggedIn: true,
            username: response.data.user_name,
            user_id: response.data.user_id
          });
          this.setState({
            redirectTo: "/search"
          });
        } else {
          console.log("Signup error");
          this.setState({
            message: response.data.error
          });
        }
      })
      .catch(err => {
        console.log("Signup server error", err);
      });
  };

  render() {
    const { firstName, lastName, username, password, message } = this.state;

    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <Motion
          style={{
            flexVal: spring(this.state.flexState ? 8 : 1)
          }}
          onRest={this.isFinished}
        >
          {({ flexVal }) => (
            <div
              className={
                this.props.type === "signIn"
                  ? "signInExpanded"
                  : "signUpExpanded"
              }
              style={{
                flexGrow: `${flexVal}`
              }}
            >
              <Motion
                style={{
                  opacity: spring(this.state.flexState ? 1 : 0, {
                    stiffness: 300,
                    damping: 17
                  }),
                  y: spring(this.state.flexState ? 0 : 50, {
                    stiffness: 100,
                    damping: 17
                  })
                }}
              >
                {({ opacity, y }) => (
                  <form
                    className="logForm"
                    style={{
                      WebkitTransform: `translate3d(0, ${y}px, 0)`,
                      transform: `translate3d(0, ${y}px, 0)`,
                      opacity: `${opacity}`
                    }}
                    onSubmit={
                      this.props.type === "signIn"
                        ? this.handleLogin
                        : this.handleSignUp
                    }
                  >
                    <h2>
                      {this.props.type === "signIn" ? "SIGN IN" : "SIGN UP"}
                    </h2>
                    <h6 className="jrs_message">{message}</h6>
                    {this.props.type === "signUp" && (
                      <Row>
                        <TextField
                          id="firstName"
                          type="text"
                          placeholder="First Name"
                          name="firstName"
                          value={firstName}
                          onChange={this.handleChange}
                          required
                        />
                        <TextField
                          id="lastName"
                          type="text"
                          placeholder="Last Name"
                          name="lastName"
                          value={lastName}
                          onChange={this.handleChange}
                          required
                        />
                      </Row>
                    )}
                    <TextField
                      id="username"
                      type="text"
                      placeholder="Username"
                      name="username"
                      value={username}
                      onChange={this.handleChange}
                      required
                    />
                    <TextField
                      id="password"
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={this.handleChange}
                      required
                    />
                    {this.props.type === "signUp" && (
                      <SubmitButton type={this.props.type} />
                    )}
                    {this.props.type === "signIn" && (
                      <SubmitButton type={this.props.type} />
                    )}
                  </form>
                )}
              </Motion>
            </div>
          )}
        </Motion>
      );
    }
  }
}

SignExpanded.PropTypes = {
  type: PropTypes.string
};

export default SignExpanded;
