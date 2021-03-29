import { useState, useEffect } from 'react';
import axios from 'axios';
import { baseURL, config } from '../../services/Index';
import './MessageForm.css';



function MessageForm() {
  let [message, setMessage] = uesState({
    message: '',
    user: '',
    time: '',
  })

  useEffec(() => {

  }, [])

  function handleChange(event) {

  }

  async function handleSubmit(event) {
    event.preventDefault();

  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='message'>Message: </label>
      <input type='text' name='message' required onChange={handleChange} />
      <label htmlFor='user'>Username: </label>
      <input type='text' name='user' required onChange={handleChange} />
      <input id='submit' type='submit' />
    </form>
  )
}

export default MessageForm;