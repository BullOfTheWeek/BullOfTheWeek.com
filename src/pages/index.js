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
import { Container } from 'react-responsive-grid'

if (typeof window !== `undefined`) {
  require('smooth-scroll')('a[href*="#"]');
}
class BlogIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { resNav: false,
                   headroomClass:"",
                 };
    this.handleResNav = this.handleResNav.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
   
      window.addEventListener('scroll', this.handleScroll);
   
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll() {
   //console.log(window.pageYOffset);
  }

  handleResNav() {
    this.setState(prevState => ({
      resNav: !prevState.resNav
    }));
    console.log(this.state.resNav);
  }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (      
      <Container
      style={{
        maxWidth: rhythm(34),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
      >
        <Helmet title={siteTitle} />
            <div className={styles.menu}>
              <ul >
               <li>
                <a  href="#about">About</a>
              </li>
              <li>
                <a  href="#contact">Contact</a>
              </li>
              <li>
                <a  href="#blog">Blog</a>
              </li>
              </ul>
            </div>
        <Bio />
        <SignUp />
        <div id="about">
          <About />
        </div>
        <div id="contact">
          <Contact />
          Feel free to drop me a line at
          {' '}
          <span className={styles.obfuscate}>
            moc.liamnotorp@keewehtfollub
          </span>
          {' '}
          (do not copy, only type with hand)
        </div>
        <div id="blog">
            <h1> Blog </h1>
            <p>Will be updated soon!</p>
            <div style={{marginLeft:'1.5em'}}>
                {posts && posts.map(({ node }) => {
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
        <footer>
          <div style={{textAlign:"center",marginTop:"6em",fontSize:"13px"}}>
             <span>Made with love in 2018</span>
          </div> 
        </footer>
      </Container>
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
