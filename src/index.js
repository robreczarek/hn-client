import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import { hashHistory, IndexRoute, Router, Route } from 'react-router';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
const store = createStore(rootReducer);

import './css/index.css';
import app from './components/app';
import home from './components/home';
import login from './components/login';
import post from './components/post';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={app}>
          <IndexRoute component={home} />
          <Route path="home" component={home} />
          <Route path="login" component={login} />
          <Route path="post" component={post} />
        </Route>
      </Router>
    </Provider>
  ),
  document.getElementById('root')
);
