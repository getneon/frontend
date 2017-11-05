import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from './Navbar';

class NavbarContainer extends Component {
  render() {
    return (
      <div>
        <Navbar signedIn={this.props.signedIn} />
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
    setUser: user => dispatch(),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarContainer);
