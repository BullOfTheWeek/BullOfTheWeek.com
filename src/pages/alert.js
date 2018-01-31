import React from 'react';
import TwitterLogin from 'react-twitter-auth';
import Axios from 'axios'; 
class Alert extends React.Component {
    constructor() {
        super();
        this.state = { isAuthenticated: false, user: null, token: ''};
        this.authTwitter = this.authTwitter.bind(this);
    }
 
    authTwitter = () => {
        let authLink;
        Axios.post(process.env.TWITTER_AUTH_REQUEST, {
            name:"twitter"
          })
          .then(function(response) {
              
            authLink = response.data.replace(/string|79|"| |[()]/g,'');
              
            
          }).then(() => {
            document.location.replace(authLink);
          })
          .catch(function (error) {
            console.log(error);
          });
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