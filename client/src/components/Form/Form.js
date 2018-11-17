import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import axios from "axios";
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
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      question: ""
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (!this.name || !this.email) return;
    axios.post("/api/forum/aboutus", {
      name: this.state.name,
      email: this.state.email,
      question: this.state.question
    });
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
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange("name")}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-email-input"
          label="Email"
          className={classes.textField}
          type="email"
          name="email"
          autoComplete="email"
          value={this.state.email}
          onChange={this.handleChange("email")}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-static"
          label="Question"
          className={classes.textField}
          value={this.state.question}
          onChange={this.handleChange("question")}
          margin="normal"
          variant="outlined"
        />

        <Button
          variant="contained"
          size="large"
          type="submit"
          name="action"
          id="EGA-askButton"
          onClick={this.handleFormSubmit}
        >
          Ask
          <Icon style={{ marginLeft: 15 }}>send</Icon>
        </Button>
      </form>
    );
  }
}
Form.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Form);
