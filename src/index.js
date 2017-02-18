import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory, IndexRoute, Router, Route } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './css/index.css';
import app from './components/app';

injectTapEventPlugin();

ReactDOM.render(
  (
    <Router history={hashHistory}>
      <Route path="/" component={app}>
      </Route>
    </Router>
  ),
  document.getElementById('root')
);
