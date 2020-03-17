import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import Profile from './components/Profile'

import './App.css';


function App() {
  return (
    <Router>
      <div className="App">

        <header className="App-header">
          <h3>Django React Authentication</h3>
          <div className="container">
            <Switch>
              <Route exact path='/' component={LoginForm} />
              <Route exact path='/signup/' component={SignupForm} />
              <Route exact path='/profile/:slug' component={Profile} />
            </Switch>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
