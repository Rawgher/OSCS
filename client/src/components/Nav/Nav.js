import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import NoSsr from "@material-ui/core/NoSsr";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import "./Nav.css";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

function LinkTab(props) {
  return (
    <Tab component="a" {...props} />
  );
}

class NavTabs extends React.Component {
  state = {
    value: 0
  };

  login = () => {
    this.props.auth.login();
    console.log("I am being clicked");
  }

  logout = () => {
    this.props.auth.logout();
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    const { isAuthenticated } = this.props.auth;
    const styles = {
      tabPosition: {
        right: "-65%"
      }
    };
    return (
      <NoSsr>
        <div>
          <AppBar position="absolute">
            <Tabs value={value} onChange={this.handleChange}>
              >
              <LinkTab
                label="Documentation"
                href="page1"
                style={styles.tabPosition}
              />
              <LinkTab label="Forum" href="/Forum/Categories" style={styles.tabPosition} />
              {
                isAuthenticated() && (
                  <LinkTab label="Logout" onClick={this.logout} style={styles.tabPosition} />
                )
              }
              {
                !isAuthenticated() && (
                  <LinkTab label="Login" onClick={this.login} style={styles.tabPosition} />
                )
              }
            </Tabs>
          </AppBar>
        </div>
      </NoSsr>
    );
  }
}

export default NavTabs;
