import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login-component';


class GoogleLoginButton extends Component {

  handleGoogleResponse = (googleUser) => {
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
