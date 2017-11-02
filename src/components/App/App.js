import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Editor from '../Editor/Editor';
import Dashboard from '../Dashboard/Dashboard';

import store from '../../redux/store';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />

            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/doc' component={Editor} />
            </Switch>

          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
