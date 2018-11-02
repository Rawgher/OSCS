import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import { Visibility } from '@material-ui/icons';
import { Visibility, ThumbUpAlt, Favorite, Share } from '@material-ui/icons';

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
                    <Visibility />
                    100
                </IconButton>
                <IconButton aria-label="Views">
                    <ThumbUpAlt />
                    100
                </IconButton>
                <IconButton aria-label="Add to favorites">
                    <Favorite />
                </IconButton>
                <IconButton aria-label="Share">
                    <Share />
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