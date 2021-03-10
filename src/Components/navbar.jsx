import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../services/authService';

const Navbar = ({ user }) => {
  return (
    <div className='top-navbar'>
      <h4>APPROCKET</h4>
      <div className='user-info'>
        <p>{user && user.username}</p>

        {auth.getCurrentUser() && (
          <Link to='/logout'>
            <p>Logout</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
