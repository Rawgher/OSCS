import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { Visibility, ThumbUpAlt, Star, Share } from "@material-ui/icons";

const styles = theme => ({
  cardHeader: {
    paddingBottom: 0,
    marginRight: 0,
    marginLeft: 0
  },
  card: {
    display: "flex",
    maxWidth: "auto",
    margin: 20
  },
  cardContent: {
    margin: "auto"
  },
  details: {
    display: "flex",
    flexDirection: "column",
    margin: "auto"
  },
  avatar: {
    width: "60px",
    height: "60px",
    margin: "auto"
  },
  center: {
    margin: "auto"
  }
});

class StackCards extends React.Component {
  state = {
    disabled: true,
    open: false,
    favorited: false
  };
  convertDate = props => {
    var newDate = new Date(parseInt(props) * 1000);
    return newDate.toLocaleDateString("en");
  };

  componentDidMount() {
    if (this.props.loggedIn === true) {
      this.setState({ disabled: false, open: true });
    }
  }

  favoriteThis() {
    this.setState({
      favorited: !this.state.favorited
    });
  }  

  render() {
    const { classes, results } = this.props;

    return results.map((a, id) => (
      <Card className={classes.card} key={id}>
        <div className={classes.details}>
          <CardHeader
            className={classes.cardHeader}
            avatar={
              <Avatar
                className={classes.avatar}
                alt="Stack Overflow result"
                src="./images/jrsStackLogo.png"
              />
            }
            title={
              <Typography variant="h5" gutterBottom>
                {a.title}
              </Typography>
            }
            subheader={
              <Typography variant="h6" gutterBottom>
                {this.convertDate(a.date)}
              </Typography>
            }
          />
          <CardActions className={classes.center} disableActionSpacing center>
            <IconButton aria-label="Views">
              <Visibility />
              {a.viewCount}
            </IconButton>
            <IconButton aria-label="Views">
              <ThumbUpAlt />
              {a.score}
            </IconButton>
            <IconButton
              aria-label="Add to favorites"
              disabled={this.state.disabled}
              disableRipple={this.state.disabled}
              onClick={this.favoriteThis}
            >
              <Star />
            </IconButton>
            <IconButton aria-label="Share">
              <Share />
            </IconButton>
          </CardActions>
        </div>
      </Card>
    ));
  }
}

StackCards.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(StackCards);
