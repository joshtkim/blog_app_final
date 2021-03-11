import React, { useState } from 'react'
import Form from '../test';
import Blogform from './Blogform'

const Bloglist = () => {
  const [blogs, setBlogs] = useState({
    title: '',
    blog: '',
  });

  return (
    <div>
      <Blogform 
      blogs={blogs}
      setBlogs={setBlogs}/>

      <Form/>
      
    </div>
  )
}

export default Bloglist
