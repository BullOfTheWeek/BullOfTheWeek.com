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
//import SmoothScroll from 'smooth-scroll/dist/js/smooth-scroll.js'
import styles from './index.module.css'

if (typeof window !== `undefined`) {
  require('smooth-scroll')('a[href*="#"]');
  
}

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={siteTitle} />
        <div className={styles.menu}>
            <ul style={{ listStyle: `none`, textAlign: `center` }}>
              <a  href="#about">About</a>
              <a  href="#contact">Contact</a>
              <a  href="#blog">Blog</a>
            </ul>
        </div>
        <Bio />
        <SignUp />
        <div id="about">
          <About />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <div id="blog">
            <h1 style={{fontFamily:"Shadows Into Light"}}> Blog </h1>
            <div style={{marginLeft:'1.5em'}}>
                {posts.map(({ node }) => {
                  const title = get(node, 'frontmatter.title') || node.fields.slug
                  return (
                    <div key={node.fields.slug}>
                      <h3
                        style={{
                          marginBottom: rhythm(1 / 4),
                        }}
                      >
                        <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                          {title}
                        </Link>
                      </h3>
                      <small>{node.frontmatter.date}</small>
                      <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                    </div>
                  )
                })}
            </div>
        </div>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
