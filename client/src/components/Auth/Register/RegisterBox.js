import React from 'react';
import Form from '../../Form';
import { Row } from '../../Grid';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Visibility, VisibilityOff, Email } from '@material-ui/icons';

class RegisterBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    return (
      <div className="inner-container">
        <div className="header">
          Register
        </div>

        <div className="box">
          <Form>
            <Row>
              <TextField 
                variant="outlined"
                label="Username"
                value={this.state.username}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                    </InputAdornment>
                  ),
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
                  ),
                }}
              />
            </Row>
            <Row>
              <TextField 
                variant="outlined"
                type={this.state.showPassword ? 'text' : 'password'}
                label="Password"
                value={this.state.password}
                onChange={this.handleChange('password')}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={this.handleClickShowPassword}
                      >
                        {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Row>
            <Button variant="contained" color="success">
              Register
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default RegisterBox;