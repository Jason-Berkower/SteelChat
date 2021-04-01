import { useState, useEffect } from 'react';
import { baseURL2, config } from '../../services/Index';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import './Search.css';

function Search(props) {
  let [search, setSearch] = useState([]);
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    if (params.id && props.messages.length > 0) {
      const searchResult = props.messages.find((message) => {
        return message.id === params.id;
      });
      setSearch(searchResult.fields);
    }
  }, [params.id, props.messages])

  function handleChange(event) {
    let { name, value } = event.target;
    setSearch((prevState) => ({ ...prevState, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (params.id) {
      let results = `${baseURL2}/${params.id}`;
      await axios.put(results, { fields: search }, config)
    }
    props.setToggle((prevState) => !prevState);
    history.pushState('/');
  }

  return (
    <div>
      <form className="search" onSubmit={handleSubmit}>
        <input placeholder="Search Posts" onChange={handleChange} />
        <input id='submit' type='submit' />
      </form>
    </div>
  )
}

export default Search;
