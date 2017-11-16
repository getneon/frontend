import React, { Component } from 'react';

import { setIdToken, setAccessToken } from '../../util/auth/AuthService';

class Callback extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
    setAccessToken();
    setIdToken();
    window.location.href = "/";
  }

  render() {
    return null;
  }
}


export default Callback;
