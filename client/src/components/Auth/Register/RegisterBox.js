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
import { Visibility, VisibilityOff, Email, Person } from "@material-ui/icons";
import "./RegisterBox.js";

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
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <Container fluid>
          <CardHeader title="Register" />
          <CardContent>
            <Form>
              <Row>
                <TextField
                  variant="outlined"
                  label="Username"
                  value={this.state.username}
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
                  label="Email"
                  value={this.state.email}
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
                  value={this.state.password}
                  onChange={this.handleChange("password")}
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
              <Button variant="contained" color="success">
                Register
              </Button>
            </Form>
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
