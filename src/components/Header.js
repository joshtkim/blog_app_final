import React from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Header = ( { sections, title }) => {

  return (
    <div>
      <Toolbar>
        <Button variant="outlined" size="small">Subscribe</Button>
        <Typography>
          {title}
        </Typography>
        <Button variant="outlined" size="small">Sign up</Button>
      </Toolbar>
      <Toolbar component="nav" variant="dense">
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
      
    </div>
  )
}

export default Header
