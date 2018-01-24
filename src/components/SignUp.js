import React from 'react'
import styles from './SignUp.module.css'
import 'typeface-vt323'
class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
      }
      handleChange(event) {
        this.setState({value: event.target.value});
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
                      <input type="email" id="emailAddress" value={this.state.value} onChange={this.handleChange} name="email" placeholder="youremail@gmail.com" />
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
