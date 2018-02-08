import React from 'react';
import Axios from 'axios'; 
class Alert extends React.Component {
    constructor() {
        super();
        this.state = { isAuthenticated: false, user: null, token: ''};
        this.authTwitter = this.authTwitter.bind(this);
    }
 
    authTwitter = () => {
        let authLink;
        document.location.replace('http://BullOfTheWeek.com/server/twitter_login.php');
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
            <button onClick={this.authTwitter}>
              sign in with twitter
            </button>
          );
        return(
           <div>
               {content}
           </div>
        );
    }
}

export default Alert