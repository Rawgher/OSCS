import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import "./Documentation.css";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "Searching using the API stack",
    imgPath: "https://i.imgur.com/sDCDTe5.jpg"
  },
  {
    label: "Navigating the YouTube page",
    imgPath: "https://i.imgur.com/wMraA92.jpg"
  },
  {
    label: "Navigating the StackOverflow page",
    imgPath: "https://i.imgur.com/JTcGcJD.jpg"
  },
  {
    label: "Navigating the SignIn Page",
    imgPath: "https://i.imgur.com/c9NNupR.jpg"
  },
  {
    label: "Sign up to gain more access",
    imgPath: "https://i.imgur.com/475wXmI.jpg"
  },
  {
    label: "Navigating the Forum",
    imgPath: "https://i.imgur.com/UnhFqlw.jpg"
  },
  {
    label: "Creating a new Forum Post",
    imgPath: "https://i.imgur.com/x3kS6He.jpg"
  },
  {
    label: "Creating a new Forum Post",
    imgPath: "https://i.imgur.com/c9AREJP.jpg"
  },
  {
    label: "Navigating the Forum",
    imgPath: "https://i.imgur.com/zsQcO99.jpg"
  },
  {
    label: "Navigating the Forum",
    imgPath: "https://i.imgur.com/I9UvGwl.jpg"
  }
];

const styles = theme => ({
  root: {
    maxWidth: 960,
    flexGrow: 1,
    margin: "auto"
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default
  },
  img: {
    height: "100%",
    display: "block",
    overflow: "hidden",
    width: "100%"
  }
});

class ProgressMobileStepper extends React.Component {
  state = {
    activeStep: 0
  };

  handleNext = () => {
    if (this.state.activeStep === tutorialSteps.length - 1) {
      this.setState({
        activeStep: 0
      });
    } else {
      this.setState(state => ({
        activeStep: state.activeStep + 1
      }));
    }
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;

    return (
      <div id="EGA-documentationMain">
        <div className={classes.root}>
          <Paper square elevation={0} className={classes.header}>
            <Typography>{tutorialSteps[activeStep].label}</Typography>
          </Paper>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={this.handleStepChange}
            enableMouseEvents
          >
            {tutorialSteps.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <img
                    className={classes.img}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            variant="progress"
            steps={11}
            position="static"
            activeStep={this.state.activeStep}
            className={classes.root}
            nextButton={
              <Button
                size="small"
                onClick={this.handleNext}
                disabled={
                  this.state.activeStep === tutorialSteps.length ? false : false
                }
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={this.handleBack}
                disabled={this.state.activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </div>
      </div>
    );
  }
}

ProgressMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(ProgressMobileStepper);
