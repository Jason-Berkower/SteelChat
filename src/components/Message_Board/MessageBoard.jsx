import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { baseURL2, config } from '../../services/Index';
import './MessageBoard.css';

function MessageBoard(props) {
  let [count, setCount] = useState(0);
  let data = props.message.fields;

  async function handleDelete() {
    let deleteURL = `${baseURL2}/${props.message.id}`
    await axios.delete(deleteURL, config);
    props.setToggle((prevState) => !prevState);
  }

  function increment(event) {
    setCount(prevCount => prevCount + 1);
  }

  function decrement(event) {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <div className='card'>
      <h3>{data.message}</h3>
      <h5>{data.user}</h5>
      <Link to={`/editpost/${props.message.id}`}>
        <button>EDIT</button>
      </Link>
      <button onClick={handleDelete}>DELETE</button>
      <div id='likes'>
        <h4>Likes: {count}</h4>
        <div id='like-buttons'>
          <button onClick={increment}>Like</button>
          <button onClick={decrement}>Dislikes</button>
        </div>
      </div>
    </div>
  )
}

export default MessageBoard;