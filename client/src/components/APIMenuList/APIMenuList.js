import React from "react";
import PropTypes from "prop-types";
// import ClickAwayListener from "@material-ui/core/ClickAwayListener";
// import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
// import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { withStyles } from "@material-ui/core/styles";
import "./APIMenuList.css";

const styles = theme => ({
  root: {
    display: "flex"
  },
  paper: {
    marginRight: theme.spacing.unit * 2,
    background: "none"
  }
});

class APIMenuList extends React.Component {
  state = {
    open: false
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <MenuList id="EGA-apiMenuList">
            <MenuItem
              className="EGA-apiListItem"
              onClick={this.props.toggleAll.bind(
                "RDPyoutubeDiv",
                "RDPstackDiv",
                "RDPbingDiv"
              )}
            >
              Main
            </MenuItem>
            <MenuItem
              className="EGA-apiListItem"
              onClick={this.props.toggleYoutube.bind("RDPyoutubeDiv")}
            >
              Youtube
            </MenuItem>
            <MenuItem
              className="EGA-apiListItem"
              onClick={this.props.toggleStack.bind("RDPstackDiv")}
            >
              Stack Overflow
            </MenuItem>
            <MenuItem className="EGA-apiListItem">Amazon</MenuItem>
            <MenuItem className="EGA-apiListItem">GitHub</MenuItem>
            <MenuItem
              className="EGA-apiListItem"
              onClick={this.props.toggleBing.bind("RDPbingDiv")}
            >
              Bing
            </MenuItem>
            <MenuItem className="EGA-apiListItem">Forum</MenuItem>
          </MenuList>
        </Paper>
        {/* <div> */}
        {/* <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom"
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList>
                      <MenuItem onClick={this.handleClose}>YouTube</MenuItem>
                      <MenuItem onClick={this.handleClose}>
                        Stack Overflow
                      </MenuItem>
                      <MenuItem onClick={this.handleClose}>Amazon</MenuItem>
                      <MenuItem onClick={this.handleClose}>GitHub</MenuItem>
                      <MenuItem onClick={this.handleClose}>Bing</MenuItem>
                      <MenuItem onClick={this.handleClose}>Forum</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div> */}
      </div>
    );
  }
}

APIMenuList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(APIMenuList);
