/* from Project 2
<div>
  <div className="nav-wrapper">
    <form className="ESH_searchbar">
      <div className="input-field">
        <input id="search" type="search" placeholder="SEARCH" required="required" />
        <label className="label-icon" for="search"><i className="material-icons">search</i></label>
        <i className="material-icons">close</i>
      </div>
    </form>
  </div>

  <div className="ESH_create-post">
    <a className="waves-effect waves-light btn ESH_create-btn" href="/Forum/NewPost">CREATE POST</a>
  </div>

  <div className="ESH_top-posts">
    <div className="ESH_title">POPULAR POSTS</div>
    <ul>
      // map through each top post
      {this.state.topPosts.map(topPost => (
        <li><Link to={`/Forum/${topPost._id}`}>{topPost.subject}</Link></li>
      ))}
    </ul>
  </div>
</div>
*/


// master here
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
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
  };

  toggleDrawer(side, open) {
    console.log("toggle drawer working");
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          {["Inbox", "Favorites", "Submissions"].map(
            (text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
        <Divider />
      </div>
    );

    return (
      <div id="profile-drawer-container">
        <Button disableRipple="true" disableFocusRipple="true" id="profileButton" onClick={() => this.toggleDrawer("left", true)}>
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