import React from 'react';
import TwitterLogin from 'react-twitter-auth';
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
    logout = () => {
        this.setState({isAuthenticated: false, token: '',user: null})
    };
    render() {
        let content = !!this.state.isAuthenticated ?
          (
              <div>
                  <p>Authenticated</p>
                  <div>
                      {this.state.user.email}
                  </div>
                  <div>
                      <button onClick={this.logout} className="button" >
                        log out
                      </button>
                  </div>
              </div>
          ) :
          (
            <TwitterLogin loginUrl="http://localhost:4000/api/v1/auth/twitter"
            onFailure={this.onFailed} onSuccess={this.onSuccess}
            requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"/>
          );
        return(
           <div>
               {content}
           </div>
        );
    }
}

export default Alert