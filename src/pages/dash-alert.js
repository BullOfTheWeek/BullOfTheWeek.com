import React from 'react'
import bitcoinPic from './bitcoin.png';
import styles from './dash-alert.module.css';
import { Container } from 'react-responsive-grid';
import { rhythm, scale } from '../utils/typography';
import cookie from 'react-cookies';
import Axios from 'axios';
  const getCookie = (name) => {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
    else {
        return false
    }
  }
  const delete_cookie = (name) => { 
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  };
  class DashboardAlert extends React.Component {
    constructor(props) {
      super(props);
      this.state = {deltaDay: 0, acountExpire: false};
    }
    componentDidMount() {
        const subscribed_date = "subscribed_date";
        const membership_finishes = "membership_finishes"; 
        const screen_name = "screen_name"; 
        if (!(getCookie(screen_name))){
            document.location.replace('http://www.bulloftheweek.com/develop/alert');
           //   document.location.replace('http://localhost:8000/alert');
        }

       else {

                var invocation = new XMLHttpRequest();
                var url = 'http://www.bullOftheweek.com/server/check_use.php';  
                var handler = (response) => {
                    if (response.currentTarget.response=="back"){
                        delete_cookie(subscribed_date);
                        delete_cookie(screen_name);
                        delete_cookie(membership_finishes);
                        document.location.replace('http://www.bulloftheweek.com/develop/alert');

                    }
                    if (response.currentTarget.response=="successfully") {
                        var diff = Math.abs(new Date(getCookie(membership_finishes).replace(/-/g,'/')) - new Date());
                        diff = Math.round(diff/86400000) + 1;
                        if (diff < 0) {
                            this.setState ({acountExpire: true});
                        }
                        else
                        {
                        
                            this.setState({deltaDay: diff});
                        }
                    }
                    else {
                        document.location.replace('http://www.bulloftheweek.com/develop/alert');

                    }
                } 
                function callOtherDomain() {
                    if(invocation) {
    
                    invocation.open('POST', url, true);
                    invocation.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    invocation.onreadystatechange = handler;
                    invocation.send("screen_name="+getCookie(screen_name)); 
                    }
                }
                callOtherDomain();
                if ((getCookie(screen_name))){
                  
                }
        }
        console.log("dif in didmount" + diff);
        
    }

    
    render() {
        const daysRemaining = 15;
        const acountVip = false;
        const dashboardTable = [];
        console.log("deltaday state in render" + this.state.deltaDay);

        for ( var i = 0; i <= 3; i++ ) {

            dashboardTable.push(
                <div className={styles.textbox} key={i.toString()}>
                    
                        <div  id="textbox">
                            <img className={styles.img} src = {bitcoinPic} />
                            <p className={styles.alignleft}>BTC</p>
                            <p className={styles.alignright}>8250$</p>
                            <div style={{clear:"both"}}></div>
                        </div>
                </div>
            )
        }
        return (
            <div style={{backgroundColor:'white'}}>
                <header className={styles.dashHeader}>
                    <div>
                        <div className={styles.alignleft}>
                            Bull Of The Week <span style={{fontSize:'0.8em'}}> Crypto Currency Alert Service ({this.state.deltaDay} days remaining)</span>
                        </div>
                        <div className={styles.alignright}>
                            <a style={{marginRight:'1.3em'}}>Upgrade Membership</a>
                            <a>logout</a>
                        </div>
                        <div style={{clear:"both"}}>
                        </div>
                    </div>
                </header>
                <Container style={{
                        maxWidth: rhythm(25),
                        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
                    }}>
                    <div className={styles.table}>
                    <ul>
                      {dashboardTable}
                    </ul>
                </div>
                </Container>
            </div>
        )
    }
}
export default DashboardAlert 