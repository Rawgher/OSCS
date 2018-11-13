import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";
import Tabs from "@material-ui/core/Tabs";
import { Link } from "react-router-dom";
import Tab from "@material-ui/core/Tab";
import LoginControl from "../LoginControl";
import "./Nav.css";

class NavTabs extends React.Component {
  state = {
    value: 0
  };

  isAuthenticated = () => {
    if (this.props.loggedIn === true) {
      return true;
  }
  return false;
}

  logout = () => {
    console.log("I am being logged out");
    window.location.reload();
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
      tabPosition: {
        left: "48%"
      }
    };
    return (
      <MuiThemeProvider theme={theme}>
        <AppBar id="EGA-appBar" position="absolute">
          <h4 className="EGA-search-logo-title">
            <span className="EGA-orange">ONE STOP</span> CODE SHOP
          </h4>
          <Tabs
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
            {this.isAuthenticated() && (
              <Tab
                label="Logout"
                onClick={this.logout}
                style={styles.tabPosition}
              />
            )}
            {!this.isAuthenticated() && (
              <Tab
                label="Login"
                component={Link}
                to="/login"
                style={styles.tabPosition}
              />
              // <LoginControl loggedIn={this.props.loggedIn}/>
             )}
          </Tabs>
        </AppBar>
      </MuiThemeProvider>
    );
  }
}

export default NavTabs;
