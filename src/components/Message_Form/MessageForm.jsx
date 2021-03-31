import { useState, useEffect } from 'react';
import axios from 'axios';
import { baseURL2, config } from '../../services/Index';
import { useHistory, useParams } from 'react-router-dom';
import './MessageForm.css';



function MessageForm(props) {
  let [message, setMessage] = useState({
    message: '',
    user: '',
  })
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    if (params.id && props.messages.length > 0) {
      const newMessage = props.messages.find((message) => {
        return message.id === params.id;
      })
      setMessage(newMessage.fields);
    }
  }, [params.id, props.messages])

  function handleChange(event) {
    let { name, value } = event.target;
    setMessage((prevState) => ({ ...prevState, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (params.id) {
      const updateURL2 = `${baseURL2}/${params.id}`;
      await axios.put(updateURL2, { fields: message }, config);
    } else {
      await axios.post(baseURL2, { fields: message }, config);
    }

    props.setToggle((prevState) => !prevState);
    history.push('/');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='message'>Message: </label>
      <textarea className='text' type='text' name='message' required onChange={handleChange} value={message.message} placeholder='i.e. "I like cheese!"' />
      <label htmlFor='user'>Username: </label>
      <input id="username" type='text' name='user' required onChange={handleChange} value={message.user} placeholder='Enter Username' />
      <input id='submit' type='submit' />
    </form>
  )
}

export default MessageForm;