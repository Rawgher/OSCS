import React from 'react';
import LoginBox from '../../components/Auth/Login';

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
            </div>
        )
    }
};

export default Login;
