import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div id="nav">
      <Link to='/'>HOME</Link>
      <Link to='/newpost'>CREATE A POST</Link>
      <Link to='/newprofile'>CREATE A USERNAME</Link>
    </div>
  )
}

export default Navbar;