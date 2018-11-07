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
    imgPath:
      "https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-collection-create-new-screen2-p2.png"
  },
  {
    label: "Navigating the Forum",
    imgPath:
      "https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-auth-Digest+copy.png"
  },
  {
    label: "Logging in and saving work",
    imgPath: "https://i.stack.imgur.com/3y8TK.png"
  },
  {
    label: "Roger is a boner",
    imgPath:
      "https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-auth-BearerToken.png"
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

  // resetSteps = () => {
  //   this.setState(state => ({
  //     activeStep: (state.activeStep = 0)
  //   }));
  // };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    // const maxSteps = tutorialSteps.length;

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
            // steps={maxSteps}
            variant="progress"
            steps={6}
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
