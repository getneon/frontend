import React from 'react';
import { Link } from 'react-router-dom';


import './Navbar.css';

const Navbar = ({ isLoggedIn, login, logout }) => {

  console.log('LOGIN STATUS => ', isLoggedIn())
  return (
    <div className={'navbar'}>
      <Link to={'/'} className={'brand'}>
        <h2>Neon</h2>
      </Link>

      { isLoggedIn() &&
        <div className={'links'}>
          <Link to={'/dashboard'} className={'link'}>
            <p>Dashboard</p>
          </Link>
          <Link to={'/doc'} className={'link'}>
            <p>New Doc</p>
          </Link>
          <p className={'link'} onClick={() => logout()}>Log Out</p>
        </div>
      }

      { !isLoggedIn() &&
        <div className={'links'}>
          <p className={'link'} onClick={() => login()}>Log In</p>
        </div>
      }
    </div>
  )
}


export default Navbar;
