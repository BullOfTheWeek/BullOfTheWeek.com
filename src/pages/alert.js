import React from 'react';

class Alert extends React.Component {
    constructor() {
        super();
        this.state = { isAuthenticated: false, user: null, token: ''};
    }
    onSuccess = (response) => {
        const token = response.headers.get('x-auth-token');
        response.json().then(user => {
          if (token) {
            this.setState({isAuthenticated: true, user: user, token: token});
          }
        });
    };
    onFailed = (error) => {
        alert(error);
    };

    render() {
        return(
            <p> sign in twiiter </p>
        )
    }
}

export default Alert