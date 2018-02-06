import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Bio from '../components/Bio'
import SignUp from '../components/SignUp'
import About from '../components/About'
import Contact from '../components/Contact'
import Blog from '../components/Blog'
import { rhythm } from '../utils/typography'
import styles from './index.module.css'
import Headroom from 'react-headroom'
import { slide as Menu } from 'react-burger-menu'
import 'typeface-vt323'

class welcome extends React.Component {


  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    return (      
      <div style={{marginTop:'5rem'}}>
        <Helmet title="Thank you" />
        <div>
           <a href="/"><h1>Bull Of The Week</h1> </a> 
           <p>Thanks for register </p>
        </div>
        <footer>
          <div style={{textAlign:"center",marginTop:"6em",fontSize:"13px"}}>
             <span>made with love in 2018</span>
          </div> 
        </footer>
      </div>
    )
  }
}

export default welcome

