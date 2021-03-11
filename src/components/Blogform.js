import React, { useState } from 'react'

const Blogform = ({ onSubmit }) => {

  let [input, setInput] = useState({
    title: '',
    blog: '',
  })


  let handleChange = e => {
    let value = e.target.value;
    setInput({
      ...input, 
      [e.target.name]: value
    })
  }

  let today = new Date();
  let seconds = today.getDate() + '-' + today.getMinutes() + ':' + today.getSeconds();

  let handleSubmit = e => {
    e.preventDefault()

    onSubmit({
      id: seconds,
      title: input.title,
      blog: input.blog
    })

    setInput({
      title:'',
      blog:''
    })
  }

  return (
    <div>
      <form className='blog-form' onSubmit={handleSubmit}>
        <input
          className='input-title'
          type="text"
          name="title"
          placeholder="Add Title"
          value={input.title}
          onChange={handleChange}
        />
        <input
          className='input-blog'
          type="text"
          name="blog"
          placeholder="Add Blog"
          value={input.blog}
          onChange={handleChange}
        />
        <button className='blog-button'>Add</button>
      </form>
    </div>
  )
}

export default Blogform
