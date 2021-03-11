import React, { useState } from 'react'
import Blogform from './Blogform'

const Bloglist = () => {
  const [blogs, setBlogs] = useState([]);

  console.log(blogs)

  const handleSubmit = blog => {
    const newBlog = [blog, ...blogs]
    console.log(blog)

    setBlogs(newBlog);
  }

  return (
    <div>
      <Blogform 
      onSubmit={handleSubmit}/>
    </div>
  )
}

export default Bloglist
