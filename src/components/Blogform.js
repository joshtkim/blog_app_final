import React, { useState } from 'react'

const Blogform = ({ blogs, setBlogs }) => {

  let [blog, setBlog] = useState({
    title: '',
    blog: '',
  })

  let handleChange = e => {
    let value = e.target.value;
    setBlog({
      ...blog, 
      [e.target.name]: value})
    console.log(blog)
  }

  let handleSubmit = e => {
    e.preventDefault()
    console.log("submitted")
  }


  return (
    <div>
      <form className='blog-form' onSubmit={handleSubmit}>
        <input
          className='input-title'
          type="text"
          name="title"
          placeholder="Add Title"
          value={blog.title}
          onChange={handleChange}
        />
        <input
          className='input-blog'
          type="text"
          name="blog"
          placeholder="Add Blog"
          value={blog.blog}
          onChange={handleChange}
        />
        <button className='blog-button'>Add</button>
      </form>
      
    </div>
  )
}

export default Blogform
