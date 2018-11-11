import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Container, Row } from "../../Grid";
import { Card, CardHeader, CardContent } from "@material-ui/core/";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Visibility, VisibilityOff, Person } from "@material-ui/icons";
import "./RegisterBox.js";
import axios from "axios";

const styles = theme => ({
  card: {
    display: "flex",
    margin: 20
  },
  center: {
    margin: "auto"
  }
});

class RegisterBox extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      message: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("sign-up, username: " + this.state.username);

    const { firstName, username, password } = this.state
    console.log(firstName, username, password);
    axios
      .post("api/auth/signup", {
        user_firstName: firstName,
        user_name: username,
        user_pass: password
      })
      .then(response => {
        console.log(response);
        if (!response.data.errmsg) {
          console.log("successful signup");
          this.setState({
            redirectTo: "/search"
          });
        } else {
          console.log("Signup error");
        }
      })
      .catch(err => {
        console.log("Signup server error");
        console.log(err);
      });
  };

  render() {
    const { classes } = this.props;
    const { firstName, lastName, username, password, message } = this.state;
    return (
      <Card className={classes.card}>
        <Container fluid>
          <CardHeader title="Register" />
          <CardContent>
            <h5>{message}</h5>
            <form onSubmit={this.handleSubmit}>
              <Row>
                <TextField
                  variant="outlined"
                  label="First Name"
                  name="firstName"
                  value={firstName}
                  onChange={this.handleChange}
                  required
                />
                <TextField
                  variant="outlined"
                  label="Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={this.handleChange}
                  required
                />
              </Row>
              <Row>
                <TextField
                  variant="outlined"
                  label="Username"
                  name="username"
                  value={username}
                  onChange={this.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton>
                          <Person />
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </Row>
              <Row>
                <TextField
                  variant="outlined"
                  type={this.state.showPassword ? "text" : "password"}
                  label="Password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Toggle password visibility"
                          onClick={this.handleClickShowPassword}
                        >
                          {this.state.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </Row>
              <Button type="submit" variant="contained" color="success">
                Sign-Up
              </Button>
            </form>
          </CardContent>
        </Container>
      </Card>
    );
  }
}

RegisterBox.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RegisterBox);
