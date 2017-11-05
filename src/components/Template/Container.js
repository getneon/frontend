import React, { Component } from 'react';
import { connect } from 'react-redux';


class Template extends Component {
  render() {
    return (
      <div>

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
)(Template);
