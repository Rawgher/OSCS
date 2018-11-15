import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
// import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
// import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import "./Form.css";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: "100%"
  }
});

class Form extends React.Component {
  state = {
    name: "",
    nameError: "",
    email: "",
    emailError: "",
    question: "",
    questionError: ""
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  validate = () => {
    let isError = false;
    const errors = {
      nameError: "",
      emailError: "",
      questionError: ""
    };
    if (this.state.name == !String) {
      isError = true;
      errors.nameError = "Your name must be a string value";
    }
    if (this.state.email.indexOf("@") === -1) {
      isError = true;
      errors.emailError = "Please enter a valid e-mail";
    }

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  onSubmit = e => {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      //clear form
      this.setState({
        name: "",
        nameError: "",
        email: "",
        emailError: "",
        question: "",
        questionError: ""
      });
      this.props.onChange({
        name: "",
        nameError: "",
        email: "",
        emailError: "",
        question: "",
        questionError: ""
      });
    }
  };
  render() {
    const { classes } = this.props;

    return (
      <form
        id="EGA-contactForm"
        className={classes.container}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-name"
          name="name"
          label="name"
          className={classes.textField}
          value={this.state.name}
          onChange={e => this.change(e)}
          errorText={this.state.nameError}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-email-input"
          name="email"
          label="email"
          className={classes.textField}
          type="email"
          className={classes.textField}
          value={this.state.email}
          onChange={e => this.change(e)}
          errorText={this.state.emailError}
          autoComplete="email"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-static"
          name="question"
          label="question"
          multiline
          rows="10"
          className={classes.textField}
          value={this.state.question}
          onChange={e => this.change(e)}
          errorText={this.state.questionError}
          margin="normal"
          variant="outlined"
        />

        <Button
          id="EGA-sendButton"
          variant="outlined"
          label="Submit"
          onClick={e => this.onSubmit(e)}
          primary
        >
          Send
        </Button>
      </form>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Form);
