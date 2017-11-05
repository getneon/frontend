import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login-component';

import './Login.css'

class GoogleLoginButton extends Component {

  handleGoogleResponse = (googleUser) => {
    console.log('user => ', googleUser);
    var profile = googleUser.getBasicProfile();

    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    let id_token = googleUser.getAuthResponse().id_token;
    console.log({accessToken: id_token});
    //anything else you want to do(save to localStorage)...
  }

  render() {
    return (
      <div>
        {/* <div className="g-signin2" data-onsuccess={this.handleGoogleResponse}></div> */}
        <GoogleLogin
          socialId="879615622858-f2oj26u8ac8b4r51f14nhb2ankf0rnpc.apps.googleusercontent.com"
          className="g-signin2"
          scope="profile"
          fetchBasicProfile={false}
          responseHandler={this.handleGoogleResponse}
          buttonText="Sign in"
        />
      </div>
    )
  }
}


export default GoogleLoginButton;
