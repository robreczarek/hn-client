import 'babel-polyfill';
// React
import React from 'react';
import ReactDOM from 'react-dom';
// Router
import { browserHistory, IndexRoute, Router, Route } from 'react-router';
// Redux
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import { syncHistoryWithStore } from 'react-router-redux';
const store = createStore(rootReducer);
const history = syncHistoryWithStore(browserHistory, store);
// CSS
import './css/index.css';
// Containers
import app from './containers/app';
import home from './containers/home';
import login from './containers/login';
import post from './containers/post';
// Tap plugin
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={history}>
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
