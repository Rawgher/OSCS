import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import { withStyles } from "@material-ui/core/styles";
// import NoSsr from "@material-ui/core/NoSsr";
import { Link } from "react-router-dom";
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

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
});

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
    const { classes } = this.props;
    const { value } = this.state;

    const { isAuthenticated } = this.props.auth;
    const styles = {
      tabPosition: {
        left: "48%"
      }
    };
    return (
      <div className={classes.root}>
        <AppBar id="EGA-appBar" position="absolute">
          <h4 className="EGA-search-logo-title">
            <span className="EGA-orange">ONE STOP</span> CODE SHOP
          </h4>
          <Tabs
            indicatorColor="disabled"
            onClick={event => event.preventDefault()}
            value={value}
            onChange={this.handleChange}
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
      </div>
    );
  }
}
NavTabs.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(NavTabs);
