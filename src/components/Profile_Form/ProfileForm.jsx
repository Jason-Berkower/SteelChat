import { useState, useEffect } from 'react';
import axios from 'axios';
import { baseURL, config } from '../../services/Index';
import { useHistory, useParams } from 'react-router-dom';
import './ProfileForm.css';

function ProfileForm(props) {
  let [user, setUser] = useState({
    username: '',
    password: '',
    name: '',
  });
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    if (params.id && props.user.length > 0) {
      const newUser = props.users.find((user) => {
        return user.id === params.id;
      });
      setUser(newUser.fields);
    }
  }, [params.id, props.users]);

  function handleChange(event) {
    let { name, value } = event.target;
    setUser((prevState) => ({ ...prevState, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (params.id) {
      const updateURL = `${baseURL}/${params.id}`;
      await axios.put(updateURL, { fields: user }, config);
    } else {
      await axios.post(baseURL, { fields: user }, config);
    }
    props.setToggle((prevState) => !prevState);
    history.push('/');
  }

  return (
    <div>
      <h3>Enter your information below</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input type='text' name='username' required onChange={handleChange} />
        <label htmlFor='password'>Password: </label>
        <input type='password' name='password' required onChange={handleChange} />
        <label htmlFor='confirm-password'>Confirm Password: </label>
        <input type='password' name='confirm-password' required onChange={handleChange} />
        <label htmlFor='name'>Name: </label>
        <input type='text' name='name' onChange={handleChange} />
        <input id='submit' type='submit' />
      </form>
    </div>
  )
}

export default ProfileForm;