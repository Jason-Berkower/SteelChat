import { Link } from 'react-router-dom';
import './UserProfile.css';

function UserProfile() {
  return (
    <div>
      <Link to='/newprofile'>
        <h3>Enter your information below</h3>
      </Link>
    </div>
  )
}

export default UserProfile;