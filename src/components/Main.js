import React from 'react'

import Container from '@material-ui/core/Container';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import Header from './Header';

const sections = [
  { title: 'Finance', url: '#' },
  { title: 'Life', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

const sidebar = {
  title: 'About',
  description: "Hi I'm Kelvin and I am a finance blogger",
  social: [
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Github', icon: GitHubIcon },
  ],
};

const Main = () => {

  return (
    <div>
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />

      </Container>
      
    </div>
  )
}

export default Main
