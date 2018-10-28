import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import NoSsr from "@material-ui/core/NoSsr";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

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
    <Tab component="a" onClick={event => event.preventDefault()} {...props} />
  );
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

    return (
      <NoSsr>
        <div>
          <AppBar position="static">
            <Tabs value={value} onChange={this.handleChange}>
              <LinkTab label="Page One" href="page1" />
              <LinkTab label="Page Two" href="page2" />
              <LinkTab label="Page Three" href="page3" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer>Documentation</TabContainer>}
          {value === 1 && <TabContainer>Forum</TabContainer>}
          {value === 2 && <TabContainer>Login</TabContainer>}
        </div>
      </NoSsr>
    );
  }
}

NavTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default NavTabs;
