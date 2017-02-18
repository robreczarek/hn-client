import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { firebaseStateReducer as firebase } from 'react-redux-firebase';

const rootReducer = combineReducers({
  firebase,
  routing: routerReducer
});

export default rootReducer;
