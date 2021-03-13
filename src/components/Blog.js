import React from 'react'

const Blog = ({ blogs }) => {
  
  console.log(blogs)
  
  return blogs.map((blog, index) => (
    <div className='blog-card' key={index}>
      <header>{blog.title}</header>
      <p>{blog.blog}</p>
    </div>
  ));
}

export default Blog
