import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'
import 'typeface-shadows-into-light'
import 'typeface-josefin-sans'
import 'typeface-indie-flower'
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
       <h1 style={{
         fontSize: '3rem',
         color: 'rgb(121, 121, 121)'
        }}
      >
          Bull Of The Week
       </h1>
       <h1 className={styles.bioDesc}>
          <span style={{
            fontSize: '2.5rem',
            color: 'rgb(141, 141, 141)'
          }}>
            The First
          </span>
          <br/>
          <span style={{
            fontSize: '7.5rem',
            lineHeight: '5rem'
          }}>
            Crypto Trading
          </span>
          
          <span style={{
            fontSize: '2rem',
            marginLeft: '1rem'
          }}>
            Mailing list
          </span> 
       </h1>

      </div>
    )
  }
}

export default Bio
