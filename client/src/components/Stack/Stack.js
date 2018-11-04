import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { Visibility, ThumbUpAlt, Favorite, Share } from '@material-ui/icons';

const styles = theme => ({
  card: {
    display: "flex",
    maxWidth: 320,
    margin: 20
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto'
  },
  avatar: {
    width: "60px",
    height: "60px"
  },
  center: {
      margin: "auto"
  }
});

class StackCards extends React.Component {

  convertDate = props => {
    var newDate = new Date(parseInt(props) * 1000);
    return newDate.toLocaleDateString("en");
  };

  render() {
    const { classes, results } = this.props;

    return results.map((a, id) => (
      <Card className={classes.card} key={id}>
        <div className={classes.details}>
            <CardHeader
                avatar={
                    <Avatar className={classes.avatar} alt="Stack Overflow result" src="./images/jrsStackLogo.png">
                    </Avatar>
                }
                title={a.title}
                subheader={this.convertDate(a.date)}
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
                <IconButton aria-label="Add to favorites">
                    <Favorite />
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
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StackCards);