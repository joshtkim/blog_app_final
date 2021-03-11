import React from 'react'

const Blogform = () => {
  return (
    <div>
      <form className='blog-form'>
        <input
        className='input-form'
        type="text"
        placeholder="Add Blog"
        />
        <button className='blog-button'>Add</button>
      </form>
      
    </div>
  )
}

export default Blogform
