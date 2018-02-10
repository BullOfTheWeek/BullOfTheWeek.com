import React from 'react'
import bitcoinPic from './bitcoin.png';
import styles from './dash-alert.module.css';
import { Container } from 'react-responsive-grid';
import { rhythm, scale } from '../utils/typography';

const getCookie = (name) => {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
    else {
        return false
    }
  }
class DashboardAlert extends React.Component {
    constructor(props) {
      super(props);
      this.state = {deltaDay: 0}
    }
    componentDidMount() {
        const subscribed_date = "subscribed_date";  
       // var diff = Math.abs(new Date() - date);
        var diff = Math.abs(new Date() - new Date(getCookie(subscribed_date).replace(/-/g,'/')));
        diff = Math.round(diff/86400000);
        this.setState({deltaDay: diff})
    }
    
    render() {
        const daysRemaining = 15;
        const acountVip = false;
        const dashboardTable = [];
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
                            Bull Of The Week <span style={{fontSize:'0.8em'}}> Crypto Currency Alert Service ({daysRemaining - this.state.deltaDay} days remaining)</span>
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