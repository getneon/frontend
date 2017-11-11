/* global gapi */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from './Navbar';

import { removeUser } from '../../redux/actionCreators';

class NavbarContainer extends Component {
  signOut = () => {
    let auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut()
      .then(() => {
        console.log('User signed out.');
      });

    this.props.removeUser();
    localStorage.removeItem('neon');
  }

  render() {
    return (
      <div>
        <Navbar signedIn={this.props.signedIn} signOut={this.signOut} />
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    signedIn: !!state.user.name,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeUser: user => dispatch(removeUser()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarContainer);
