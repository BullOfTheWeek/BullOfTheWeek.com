import React from 'react'
import styles from './SignUp.module.css'
import 'typeface-vt323'
class SignUp extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      const MAILING_LIST_URL = 'https://bulloftheweek.campayn.com/contacts/signup_form_add_contact/71708';
        
      return (
        <div style={{textAlign:'center'}}>
          <form id="signupSubscriberForm" method="post" action={MAILING_LIST_URL} acceptCharset="utf-8">
              <input type="hidden" name="formId" value="71280" />
              <div style={{marginTop:'2rem'}}>
                <span>
                  Enter your email and twitter handle to receive my latest ICO recommendation for this week and subscribe to my weekly mailing list updates.
                </span>
              </div>
              <div style={{marginTop:'2rem'}}>
                <input type="email" id="emailAddress" name="email" placeholder="youremail@gmail.com" />
              </div>
              {/* will be activated later on campaigns
              <div style={{marginTop:'2rem'}}>
                <input type="text" id="title" placeholder="twitter handle (optional)"  name="title"  />
              </div>
              */}
              <div style={{marginTop:'2rem'}}>
                <input className={styles.button} type="submit" id="subscribeToList" value="Join the Legends" />
              </div>
          </form>
        </div>
      )
    }
}
export default SignUp
