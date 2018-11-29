import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Auth.css";
import FaGoogle from "react-icons/lib/fa/google";
import FaGithub from "react-icons/lib/fa/github";
import Button from "@material-ui/core/Button";
import { ArrowForward } from "@material-ui/icons";
import axios from "axios";

class SubmitButton extends Component {
  githubLogin = () => {
    // e.preventDefault();
    console.log("handleSubmit login");

    axios
      .get("/auth/github")
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
          <a href="http://localhost:3001/auth/google">
            <FaGoogle className="socialNetsIcon" />
          </a>
          <a href="http://localhost:3001/auth/github">
            <FaGithub className="socialNetsIcon" />
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
