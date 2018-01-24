import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'
import 'typeface-shadows-into-light'
import 'typeface-josefin-sans'
import 'typeface-vt323'
import styles from '../pages/index.module.css'

import { rhythm } from '../utils/typography'
class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          marginBottom: rhythm(2.5),
        }}
      >
      <div style={{fontFamily: 'VT323',  fontSize:'1.3em'}}>    
       <span>
          Wellcome to Bull Of The Week
       </span>
       </div>
       <h1 className={styles.bioDesc} style={{fontFamily: 'VT323',lineHeight:'1.5em',marginTop:'0.3em'}}>
         <strong>
            <span>
              The First Crypto Trading
              <br/>
              Mailing list
            </span> 
         </strong>
       </h1>
        <p>
          join today to find great ICO reviews,undervalued 
          crypto tokens and solid ways to make profit every
          week in your email for FREE! 
        </p>
      </div>
    )
  }
}

export default Bio
