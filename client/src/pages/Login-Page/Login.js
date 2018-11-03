import React from 'react';
import LoginBox from '../../components/Auth/Login';
import RegisterBox from '../../components/Auth/Register';

class Login extends React.Component {
    state = {
        email: '',
        password: '',
        showPassword: false,
    };

    render () {
        return (
            <div>
               <LoginBox />
               <RegisterBox />
            </div>
        )
    }
};

export default Login;
