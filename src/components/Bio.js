import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'
import { rhythm } from '../utils/typography'
class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          marginBottom: rhythm(2.5),
        }}
      >
       <span>
          Wellcome to Bull Of The Week
       </span>
       <br/>
       <span>
         The First Crypto Trading
         <br/>
         Mailing list 
       </span>
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
