import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div>
      <Link to='/'>HOME</Link>
      <Link to='/newprofile'>Create a Username</Link>
      <Link to='/newpost'>Create a Post</Link>
    </div>
  )
}

export default Navbar;