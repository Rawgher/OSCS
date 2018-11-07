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
  return <Tab component="a" {...props} />;
}

class NavTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    const styles = {
      tabPosition: {
        right: "-50%"
      }
    };
    return (
      <NoSsr>
        <div>
          <AppBar id="EGA-appBar" position="absolute">
            <Tabs value={value} onChange={this.handleChange}>
              <LinkTab label="Home" href="/search" style={styles.tabPosition} />
              <LinkTab
                label="Documentation"
                href="page1"
                style={styles.tabPosition}
              />
              <LinkTab
                label="Forum"
                href="/Forum/Categories"
                style={styles.tabPosition}
              />
              <LinkTab label="Login" href="/Login" style={styles.tabPosition} />
            </Tabs>
          </AppBar>
        </div>
      </NoSsr>
    );
  }
}

export default NavTabs;
