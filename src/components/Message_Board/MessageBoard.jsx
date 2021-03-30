import { Link } from 'react-router-dom';
import axios from 'axios';
import { baseURL2, config } from '../../services/Index';
import './MessageBoard.css';

function MessageBoard(props) {
  console.log();
  // let data = props.message.fields;
  // console.log(data);

  async function handleDelete() {
    let deleteURL = `${baseURL2}/${props.message.id}`
    await axios.delete(deleteURL, config);
    props.setToggle((prevState) => !prevState);
  }
  return (
    <div className='card'>
      {/* <h3>{data.message}</h3>
      <h5>{data.user}</h5> */}

      <button onClick={handleDelete}>DELETE</button>
    </div>
  )
}

export default MessageBoard;