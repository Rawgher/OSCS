import React from "react";
import Form from "../../Form";
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
import axios from 'axios';

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
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleSubmit = (e) => {
    console.log("Am i working");
    e.preventDefault();
    

    const { username, password } = this.state;

    axios.post('/api/auth/login', { username, password })
    .then((result) => {
      console.log('test1');
      localStorage.setItem('jwtToken', result.data.token);
      this.setState({ message: '' });
      this.props.history.push('/');
    })
    .catch((error) => {
      if(error.response.status === 401) {
        console.log("tes2")
        this.setState({ message: 'Login failed. Username or password does not match.'});
      }
    });
  }

  render() {
    const { classes } = this.props;
    const { username, password, message } = this.state;
    return (
      <Card className={classes.card}>
        <Container fluid>
          <CardHeader title="Login" />
          <CardContent>
            <form onSubmit={this.handleSubmit}>
              <Row>
                <TextField
                  variant="outlined"
                  label="Username"
                  name="username"
                  value={username}
                  onChange={this.handleChange("username")}
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
                  onChange={this.handleChange("password")}
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

LoginBox.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginBox);
