import React from 'react';
import { GoogleLogin } from 'react-google-login-component';


const Login = ({ handleLogin }) => {
  return (
    <div>
      <h2>Login</h2>
      <script src="https://apis.google.com/js/platform.js" async defer></script>
      <GoogleLogin
        socialId="879615622858-f2oj26u8ac8b4r51f14nhb2ankf0rnpc.apps.googleusercontent.com"
        className="google-login g-signin2"
        scope="profile"
        fetchBasicProfile={false}
        responseHandler={handleLogin}
        buttonText="Sign in"
      />
    </div>
  )
}


export default Login;
