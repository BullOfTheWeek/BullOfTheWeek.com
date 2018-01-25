import React from 'react'
import styles from './SignUp.module.css'
import 'typeface-vt323'
class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: '',twitter: ''};
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleTwitterChange = this.handleTwitterChange.bind(this);
        //Twitter Handle (optional)
      }
      handleEmailChange(event) {
        this.setState({email: event.target.value});
      }
      handleTwitterChange(event) {
        this.setState({twitter: event.target.value});
      }
    render() {
        return (
            <div style={{textAlign:'center'}}>
                <h1 style={{fontFamily:'vt323'}}> join us ! </h1>
                <form id="signupSubscriberForm" method="post" action="https://bulloftheweek.campayn.com/contacts/signup_form_add_contact/71708" acceptCharset="utf-8">
                    <input type="hidden" name="formId" value="71280" />
                    <div style={{marginTop:'2rem'}}>
                      <span>Fill out your e-mail address <br /> to receive our newsletter!</span>
                    </div>
                    <div style={{marginTop:'2rem'}}>
                      <input type="email" id="emailAddress" value={this.state.email} onChange={this.handleEmailChange} name="email" placeholder="youremail@gmail.com" />
                    </div>
                    <div style={{marginTop:'2rem'}}>
                      <input type="text" id="twitter" value={this.state.twitter} onChange={this.handleTwitterChange} placeholder="twitter handle (optional)"  name="twitter"  />
                    </div>
                    <div style={{marginTop:'2rem'}}>
                      <input className={styles.button} type="submit" id="subscribeToList" value="Subscribe" />
                    </div>
                    <a href="https://campayn.com">campayn</a>
                </form>
            </div>
        )
    }
}
export default SignUp
