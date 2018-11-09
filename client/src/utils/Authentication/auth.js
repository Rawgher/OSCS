import auth0 from 'auth0-js';
import history from './history';

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'oscs.auth0.com',
        clientID: 'awW6u7vuS8tI5bk42ZYJqalcfbhCTbwg',
        redirectUri: 'http://localhost:3000/callback',
        responseType: 'token id_token',
        scope: 'openid'
    });

    login = () => {
        this.auth0.authorize();
    }

    // Parses the result after authentication from URL hash
    handleAuthentication = () => {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
                history.replace('/');
            } else if (err) {
                history.replace('/');
                console.log(err);
            }
        });
    }

    // Sets user details in localStorage
    setSession = (authResult) => {
        // Set the time that the access token will expire at
        let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        history.replace('/');
    }

    // Removes user details from localStorage
    logout = () => {
        // Clear access token and ID token from local storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // Navigate to the home route
        history.replace('/');
    }

    // Check if the user is authenticated
    isAuthenticated = () => {
        // Check whether the current time is past the access token's expiry time
        let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }
}