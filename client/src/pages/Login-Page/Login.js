import React from 'react';
import Stack from '../../components/Stack';
import Form from '../../components/Form';
import { Row } from '../../components/Grid';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Visibility, VisibilityOff, Email } from '@material-ui/icons';


class Login extends React.Component {
    state = {
        username: '',
        password: '',
        showPassword: false,
    };

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    render () {
        return (
            <div>
                <Stack />
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
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
};

export default Login;
