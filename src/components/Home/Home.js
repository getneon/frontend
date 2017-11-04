import React from 'react';

import GoogleLoginButton from '../Login/GoogleLoginButton';
import './Home.css';

const Home = () => {
  // function onSignIn(googleUser) {
  //   var profile = googleUser.getBasicProfile();
  //   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  //   console.log('Name: ' + profile.getName());
  //   console.log('Image URL: ' + profile.getImageUrl());
  //   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  // }

  return (
    <div className={'container'}>
      <h2>Welcome</h2>
      <GoogleLoginButton />
    </div>
  )
}


export default Home;
