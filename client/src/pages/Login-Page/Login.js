import React from 'react';
import Stack from '../../components/Stack';
import Form from '../../components/Form';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Email from '@material-ui/icons/Email';
import Button from '@material-ui/core/Button';


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
                    <Button variant="contained" color="success">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
};

export default Login;
