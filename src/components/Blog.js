import React from 'react'

const Blog = ({ blogs }) => {
  
  
  return blogs.map((blog) => {
    <div>
      {blog.title}
      {blog.blog}
    </div>
  })
}

export default Blog
