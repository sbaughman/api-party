import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'

import Github from './Github';
import Nasa from './Nasa';
import Homework from './Homework';

ReactDOM.render(
  <Router>
    <div className="App">
      <div className="App-header">
        <div className="App-headings">
          <h3>There's no party like an</h3>
          <h1>API Party</h1>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to={'/github'}>Github API</NavLink>
          </li>
          <li>
            <NavLink to={'/nasa'}>NASA API</NavLink>
          </li>
          <li>
            <NavLink to={'/homework'}>Homework</NavLink>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/github' component={Github} />
        <Route path='/nasa' component={Nasa} />
        <Route path='/homework' component={Homework} />
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);
