import React, { Component } from 'react';
import { connect } from 'react-redux';

import Login from './Login';

import { setUser } from '../../redux/actionCreators';

class LoginContainer extends Component {

  handleLogin = (googleUser) => {
    let profile = googleUser.getBasicProfile();
    let id_token = googleUser.getAuthResponse().id_token;
    const user = {
      name: profile.getName(),
      profilePhoto: profile.getImageUrl(),
      email: profile.getEmail(),
      idToken: id_token,
    }

    this.props.setUser(user);
    //anything else you want to do(save to localStorage)...
  }

  render() {
    console.log('USER ON LOGIN => ', this.props.user)
    return (
      <div>
        <Login handleLogin={this.handleLogin}/>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUser: user => dispatch(setUser(user)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
