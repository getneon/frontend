import React from 'react';
import { Link } from 'react-router-dom';


import './Navbar.css';

const Navbar = ({ signedIn, signOut }) => {
  return (
    <div className={'navbar'}>
      <Link to={'/'} className={'brand'}>
        <h2>Neon</h2>
      </Link>

      { signedIn &&
        <div className={'links'}>
          <Link to={'/dashboard'} className={'link'}>
            <p>Dashboard</p>
          </Link>
          <Link to={'/doc'} className={'link'}>
            <p>New Doc</p>
          </Link>
          <p className={'link'} onClick={signOut}>Log Out</p>
        </div>
      }

      { !signedIn &&
        <div className={'links'}>
          <Link to={'/sign_in'} className={'link'}>
            <p>Sign In</p>
          </Link>
          <p className={'link'} onClick={signOut}>Log Out</p>
        </div>
      }
    </div>
  )
}


export default Navbar;
