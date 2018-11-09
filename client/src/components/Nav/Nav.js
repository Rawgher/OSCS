import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";
import Tabs from "@material-ui/core/Tabs";
import { Link } from "react-router-dom";
import Tab from "@material-ui/core/Tab";
import "./Nav.css";

class NavTabs extends React.Component {
  state = {
    value: 0
  };

  login = () => {
    this.props.auth.login();
    console.log("I am being logged in");
  };

  logout = () => {
    this.props.auth.logout();
    console.log("I am being logged out");
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
            backgroundColor: orange[700]
            // display: "none"
          }
        }
      }
    });
    const { isAuthenticated } = this.props.auth;
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
            onChange={this.handleChange}
            // indicatorColor="none"
            onClick={event => event.preventDefault()}
            value={value}
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
              to="/Documentation"
              style={styles.tabPosition}
            />
            <Tab
              label="Forum"
              component={Link}
              to="/Forum/Categories"
              style={styles.tabPosition}
            />
            {isAuthenticated() && (
              <Tab
                label="Logout"
                onClick={this.logout}
                style={styles.tabPosition}
              />
            )}
            {!isAuthenticated() && (
              <Tab
                label="Login"
                onClick={this.login}
                style={styles.tabPosition}
              />
            )}
          </Tabs>
        </AppBar>
      </MuiThemeProvider>
    );
  }
}

export default NavTabs;
