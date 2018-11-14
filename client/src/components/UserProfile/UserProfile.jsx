import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";

const styles = theme => ({
  chip: {
    margin: theme.spacing.unit
  }
});

class UserProfile extends React.Component {
  componentDidMount() {
    console.log("Profile chip loaded");
  }

  render() {
    const { classes, username } = this.props;
    return (
      <div>
        <Chip
          avatar={
            <Avatar
              alt="#"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDb5XEj5NRS8CkhJx2DpO0Hw6ysCbIo0V5kFzqOHUGSLrs9dy"
            />
          }
          label = {username }
          className={classes.chip}
        />
      </div>
    );
  }
}

UserProfile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserProfile);
