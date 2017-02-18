import { createStore, compose } from 'redux'
import rootReducer from '../reducers'
import { reduxFirebase } from 'react-redux-firebase'

// Replace with your Firebase config
const fbConfig = {
  apiKey: '',
  authDomain: 'hacker-news.firebaseio.com',
  databaseURL: 'https://hacker-news.firebaseio.com/v0/'
}

export default function configureStore (initialState, history) {
  const createStoreWithMiddleware = compose(
    reduxFirebase(fbConfig, { userProfile: 'users' }),
    // Redux Devtools
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  )(createStore)
  const store = createStoreWithMiddleware(rootReducer)
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducer', () => {
      const nextRootReducer = require('../reducer')
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
