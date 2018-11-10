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
  }

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    axios.post('/api/auth/login', { username, password })
    .then((result) => {
      localStorage.setItem('jwtToken', result.data.token);
      this.setStage({ message: '' });
      this.props.history.push('/');
    })
    .catch((error) => {
      if(error.response.status === 401) {
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
            <Form action="/" onSubmit={this.onSubmit}>
              <Row>
                <TextField
                  variant="outlined"
                  label="Username"
                  value={username}
                  onChange={this.onChange}
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
                  value={password}
                  onChange={this.onChange}
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
            </Form>
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
