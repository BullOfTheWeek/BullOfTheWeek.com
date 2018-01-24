import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'
import 'typeface-inconsolata'
Wordpress2016.overrideThemeStyles = () => ({
  'a': {
    boxShadow: 'none',
  },
  'body': {
    fontFamily: 'Inconsolata',
    fontSize:'18px',
  }

})

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
