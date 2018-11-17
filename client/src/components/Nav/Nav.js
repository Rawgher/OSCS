import React from "react";
import { Redirect } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";
import Tabs from "@material-ui/core/Tabs";
import { Link } from "react-router-dom";
import Tab from "@material-ui/core/Tab";
import axios from "axios";
import "./Nav.css";

class NavTabs extends React.Component {
  state = {
    value: 0,
    redirectTo: null,
  };

  isAuthenticated = () => {
    if (this.props.loggedIn === true) {
      return true;
    }
    return false;
  };

  logout = e => {
    // e.preventDefault();
    console.log("logging out");
    axios
      .post("/api/auth/logout")
      .then(response => {
        console.log(response.data);
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: false,
            username: null
          });
          console.log("is this loggin out?");
          window.location.reload();
          // this.setState({
          //   redirectTo: "/search"
          // });
        }
      })
      .catch(error => {
        console.log("Logout error", error);
      });
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    const theme = createMuiTheme({
      overrides: {
        MuiTabs: {
          indicator: {
            backgroundColor: orange[700],
            display: "none"
          }
        }
      }
    });
    const styles = {
      tabPosition: {}
    };
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <MuiThemeProvider theme={theme}>
          <AppBar id="EGA-appBar" position="absolute">
            <h4 className="EGA-search-logo-title">
              <span className="EGA-orange">ONE STOP</span> CODE SHOP
            </h4>
            <Tabs
              id="EGA-tabsContainer"
              value={value}
              onChange={this.handleChange}
              onClick={event => event.preventDefault()}
            >
              <Tab
                label="Home"
                component={Link}
                to="/search"
                style={styles.tabPosition}
              />
              <Tab
                label="About"
                component={Link}
                to="/aboutus"
                style={styles.tabPosition}
              />
              <Tab
                label="Documentation"
                component={Link}
                to="/documentation"
                style={styles.tabPosition}
              />
              <Tab
                label="Forum"
                component={Link}
                to="/forum/categories"
                style={styles.tabPosition}
              />
              {this.props.loggedIn === true && (
                <Tab
                  label="Logout"
                  onClick={this.logout}
                  style={styles.tabPosition}
                />
              )}
              {this.props.loggedIn === false && (
                <Tab
                  label="Login"
                  component={Link}
                  to="/login"
                  style={styles.tabPosition}
                  className="jrsTab"
                />
              )}
            </Tabs>
          </AppBar>
        </MuiThemeProvider>
      );
    }
  }
}

export default NavTabs;
