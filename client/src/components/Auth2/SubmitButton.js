import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Auth.css";
import FaGoogle from "react-icons/lib/fa/google";
import FaGithub from "react-icons/lib/fa/github";
import Button from "@material-ui/core/Button";
import { ArrowForward } from "@material-ui/icons";

class SubmitButton extends Component {

  render() {
    let socialNets = null;

    if (this.props.type === "signIn") {
      socialNets = (
        <div className="socialNets">
          <FaGoogle className="socialNetsIcon" />
		  <a href="http://localhost:3001/api/auth/github">
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
