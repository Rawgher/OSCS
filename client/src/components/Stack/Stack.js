import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import VisibilityIcon from "@material-ui/icons/Visibility";
import ThumbUpAlt from "@material-ui/icons/ThumbUpAlt"
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
  card: {
    display: "flex",
    maxWidth: 350,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: "auto",
  },
  avatar: {
    width: "60px",
    height: "60px"
  },
  center: {
      margin: "auto"
  }
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <div className={classes.details}>
            <CardHeader
                avatar={
                    <Avatar aria-label="Stack Overflow result" className={classes.avatar} src="https://media.wired.com/photos/5926db217034dc5f91becd6b/master/w_1904,c_limit/so-logo-s.jpg">
                    </Avatar>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            <CardContent className={classes.content}>
                <Typography component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
            </CardContent>
            <CardActions className={classes.center} disableActionSpacing>
                <IconButton aria-label="Views">
                    <VisibilityIcon />
                    100
                </IconButton>
                <IconButton aria-label="Views">
                    <ThumbUpAlt />
                    100
                </IconButton>
                <IconButton aria-label="Add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="Share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </div>
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);