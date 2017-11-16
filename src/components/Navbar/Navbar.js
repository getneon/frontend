import React from 'react';
import { Link } from 'react-router-dom';


import './Navbar.css';

const Navbar = () => {
  return (
    <div className={'navbar'}>
      <Link to={'/'} className={'brand'}>
        <h2>Neon</h2>
      </Link>

      <div className={'links'}>
        <Link to={'/dashboard'} className={'link'}>
          <p>Dashboard</p>
        </Link>
        <Link to={'/doc'} className={'link'}>
          <p>Document</p>
        </Link>
      </div>
    </div>
  )
}


export default Navbar;
