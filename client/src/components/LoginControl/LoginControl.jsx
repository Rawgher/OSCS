import React, { Component } from "react";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";
import axios from 'axios';

class LoginControl extends React.Component {
  logout() {
    axios.get("/auth/logout").then(
        console.log(this.props.loggedIn),
        alert("You have logged out")
    );
  }

  render() {
    const loggedIn = this.props.loggedIn;
    let button;

    if (!loggedIn) {
      button = (
        <Tab
          label="Login"
          component={Link}
          to="/login"
          //   style={this.props.tabPosition}
        />
      );
    } else {
      button = (
        <Tab
        label="Logout"
        onClick={this.logout}
        //   style={this.props.tabPosition}
      />
        
      );
    }

    return ({button});
  }
}

export default LoginControl;
