import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { baseURL2, config } from '../../services/Index';
import './MessageBoard.css';

function MessageBoard(props) {
  let [count, setCount] = useState(0);
  let data = props.message && props.message.fields;

  async function handleDelete() {
    let deleteURL = `${baseURL2}/${props.message.id}`
    await axios.delete(deleteURL, config);
    props.setToggle((prevState) => !prevState);
  }

  function increment() {
    setCount(prevCount => prevCount + 1);
  }

  async function decrement() {
    setCount(prevCount => prevCount - 1);
  }

  return (
    <div>
      { data ? <div className='card'>
        < h3 > {data.message}</h3 >
        <h5>{data.user}</h5>
        <sub>{data.time}</sub>
        <Link to={`/editpost/${props.message.id}`}>
          <button>EDIT</button>
        </Link>
        <button>COMMENT</button>
        <button onClick={handleDelete}>DELETE</button>
        <div id='likes'>
          <h4>Likes: {count}</h4>
          <div id='like-buttons'>
            <button id='like' onClick={increment}>Like</button>
            <button id='dislike' onClick={decrement}>Dislikes</button>
          </div>
        </div>
      </div > : null
      }
    </div>
  )
}

export default MessageBoard;