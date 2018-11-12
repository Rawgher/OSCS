import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    width: "100%",
    maxWidth: 345,
    padding: 5
  },
  media: {
    height: 140
  },
  image: {
    maxWidth: "75%",
    margin: "auto",
    textAlign: "center",
    display: "flex",
    borderRadius: "50%",
    border: "1px solid white"
  }
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} title={props.name}>
          <img src={props.image} className={classes.image} />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography component="p">{props.description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          target="_blank"
          rel="noreferrer noopener"
          href={props.githubURL}
        >
          GitHub
        </Button>
        <Button
          size="small"
          color="primary"
          target="_blank"
          rel="noreferrer noopener"
          href={props.linkedInURL}
        >
          LinkedIn
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
