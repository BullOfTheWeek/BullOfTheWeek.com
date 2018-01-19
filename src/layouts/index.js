import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'
import { rhythm, scale } from '../utils/typography'
const ListLink = props =>
<li style={{ display: `inline-block`, marginRight: `1rem`  }}>
  <Link style={{textDecoration:'none'}} to={props.to}>
    {props.children}
  </Link>
</li>
class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {
      header = (
        <div>
            <ul style={{ listStyle: `none`, textAlign: `center` }}>
              <ListLink to="/">About</ListLink>
              <ListLink to="/about/">Contact</ListLink>
              <ListLink to="/contact/">Blog</ListLink>
            </ul>
        </div>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Gatsby Starter Blog
          </Link>
        </h3>
      )
    }
    return (
      <Container
        style={{
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        
        {children()}
      </Container>
    )
  }
}

export default Template
