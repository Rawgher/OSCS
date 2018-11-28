import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Auth.css";
import FaGoogle from "react-icons/lib/fa/google";
import FaGithub from "react-icons/lib/fa/github";
import Button from "@material-ui/core/Button";
import { ArrowForward } from "@material-ui/icons";
import axios from 'axios';

class SubmitButton extends Component {

  githubLogin = e => {
    e.preventDefault();
    console.log("handleSubmit login");

    axios
      .get("/api/auth/github")
      .then(response => {
        console.log("login response: ", response);
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

  render() {
    let socialNets = null;

    if (this.props.type === "signIn") {
      socialNets = (
        <div className="socialNets">
          <FaGoogle className="socialNetsIcon" />
      <a href="api/auth/github">
      {/* <Button onClick={this.githubLogin}> */}
      <FaGithub className="socialNetsIcon" />

      {/* </Button> */}
		  </a>
        </div>
      );
    } else {
      socialNets = <div className="socialNets" />;
    }
    return (
      <div className={"submitButton"}>
        {socialNets}
        <Button type="submit" variant="contained" color="success">
          <ArrowForward />
        </Button>
      </div>
    );
  }
}

SubmitButton.PropTypes = {
  type: PropTypes.String
};

export default SubmitButton;
