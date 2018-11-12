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
      tabPosition: {}
    };
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
              to="/Search"
              style={styles.tabPosition}
            />
            <Tab
              label="About"
              component={Link}
              to="/AboutUs"
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
            {/* {isAuthenticated() && (
              <Tab
                label="Logout"
                onClick={this.logout}
                style={styles.tabPosition}
              />
            )}
            {!isAuthenticated() && ( */}
            <Tab
              label="Login"
              component={Link}
              to="/login"
              style={styles.tabPosition}
            />
            {/* )} */}
          </Tabs>
        </AppBar>
      </MuiThemeProvider>
    );
  }
}

export default NavTabs;
