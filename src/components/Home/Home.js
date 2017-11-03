import React from 'react';

import './Home.css';

const Home = () => {
  return (
    <div className={'container'}>
      <h2>Welcome</h2>
      <div className="g-signin2" data-onsuccess="onSignIn"></div>
    </div>
  )
}


export default Home;
