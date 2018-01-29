import React from 'react';

class Alert extends React.Component {
    constructor() {
        super();
        this.state = { isAuthenticated: false, user: null, token: ''};
    }
    render() {
        return(
            <p> sign in twiiter </p>
        )
    }
}

export default Alert