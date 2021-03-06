import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import UserProfile from "../UserProfile";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import "./Sidebar.css";

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

class Sidebar extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
    display: "none"
  };

  componentDidMount() {
    if (this.props.loggedIn === true) {
      this.setState({ display: true });
    }
  }

  toggleDrawer(side, open) {
    console.log("toggle drawer working");
    this.setState({
      [side]: open
    });
  }

  render() {
    const { classes, username } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <UserProfile username={username} />
          {["Inbox", "Favorites", "Submissions"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </div>
    );

    return (
      <div id="profile-drawer-container">
        <Button
          id="profileButton"
          style={{ display: this.state.display }}
          onClick={() => this.toggleDrawer("left", true)}
        >
          My Profile
        </Button>
        <SwipeableDrawer
          open={this.state.left}
          onClose={() => this.toggleDrawer("left", false)}
          onOpen={() => this.toggleDrawer("left", true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={() => this.toggleDrawer("left", false)}
            onKeyDown={() => this.toggleDrawer("left", false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Sidebar);
