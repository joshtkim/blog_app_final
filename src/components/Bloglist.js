import React, { useState } from 'react'
import Blogform from './Blogform'
import Blog from './Blog'

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
      <Blog 
        blogs={blogs}
      />
    </div>
  )
}

export default Bloglist
