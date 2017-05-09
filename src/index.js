import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'

import Github from './Github';
import Nasa from './Nasa';

ReactDOM.render(
  <Router>
    <div className="App">
      <div className="App-header">
        <h1>API Party</h1>
        <h3>Get <i>all</i> the API data</h3>
        <ul className="nav-links">
          <li>
            <NavLink to={'/github'}>Github API</NavLink>
          </li>
          <li>
            <NavLink to={'/nasa'}>NASA API</NavLink>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/github' component={Github} />
        <Route path='/nasa' component={Nasa} />
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);
