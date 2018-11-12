import React from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Container, Row } from "../../Grid";
import { Card, CardHeader, CardContent } from "@material-ui/core/";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Visibility, VisibilityOff, Email } from "@material-ui/icons";
import "./LoginBox.css";
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

class LoginBox extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      message: "",
      redirectTo: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSumbit = this.handleSumbit.bind(this);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSumbit = e => {
    e.preventDefault();
    console.log("handleSubmit login");

    const { username, password } = this.state;
    console.log(username, password);
    axios
      .post("/api/auth/login", {
        user_name: username,
        user_pass: password
      })
      .then(response => {
        console.log("login response: ", response);
        if (response.status === 200) {
          // update App.js state
          this.props.updateUser({
            loggedIn: true,
            username: response.data.user_name,
            user_id: response.data.user_id
          });
          this.setState({
            redirectTo: "/search"
          });
        }
      })
      .catch(error => {
        console.log("login error: ", error);
      });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { classes } = this.props;
    const { username, password, message } = this.state;
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <Card className={classes.card}>
          <Container fluid>
            <CardHeader title="Login" />
            <CardContent>
              <h5>{message}</h5>
              <form onSubmit={this.handleSumbit}>
                <Row>
                  <TextField
                    variant="outlined"
                    label="Username"
                    name="username"
                    value={username}
                    onChange={this.handleChange}
                    required
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton>
                            <Email />
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
                    required
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
                  Login
                </Button>
              </form>
            </CardContent>
          </Container>
        </Card>
      );
    }
  }
}

LoginBox.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginBox);
