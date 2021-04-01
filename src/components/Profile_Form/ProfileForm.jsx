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
      let password = document.getElementById('password');
      if (password.length >= 8 && password.length <= 32) {
        const updateURL = `${baseURL}/${params.id}`;
        await axios.put(updateURL, { fields: user }, config);
      } else {
        alert("Insufficient Password Length! Must be 8 or more characters long.");
      }
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
        <input type='text' name='username' required onChange={handleChange} value={user.username} placeholder="i.e. SurgeBrand8" />
        <label htmlFor='password'>Password: </label>
        <input id='password' type='password' name='password' required onChange={handleChange} value={user.password} placeholder="Enter Password" />
        <label htmlFor='name'>Name: </label>
        <input type='text' name='name' onChange={handleChange} value={user.name} placeholder="i.e. John Doe" />
        <input id='submit' type='submit' />
      </form>
    </div>
  )
}

export default ProfileForm;