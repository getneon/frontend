import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import NavbarContainer from '../Navbar/NavbarContainer';
import LoginContainer from '../Login/LoginContainer';
import Home from '../Home/Home';
import Editor from '../Editor/Editor';
import Dashboard from '../Dashboard/Dashboard';
import Callback from '../Navigation/Callback';

import store from '../../redux/store';
import { setUser } from '../../redux/actionCreators';
import { requireAuth } from '../../util/auth/AuthService';

import './App.css';

class App extends Component {

  componentWillMount() {
    // let user = JSON.parse(localStorage.getItem('neon'));
    // console.log('stored user => ', user);
    //
    // if (user) {
    //   store.dispatch(setUser(user));
    // }
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <NavbarContainer />

            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/doc' component={Editor} />
              <Route path='/sign_in' component={LoginContainer} />
              <Route path="/callback" component={Callback} />
            </Switch>

          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
