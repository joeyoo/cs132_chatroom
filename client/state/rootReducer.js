import {
  createStore, // Redux func that will create the global store
  combineReducers, // acts as root reducer (which just combines the returned states of each imported component and returns one global state object)
  applyMiddleware // allows middleware to be used
} from 'redux';


import thunk from 'redux-thunk'; // middleware to allow functions/delayed functions to be returned by redux action creators (as opposed to just actions)
// ** actions creators are simply best-practice functions that return 'actions' that are passed to Redux reducers

import { composeWithDevTools } from 'redux-devtools-extension'; // helper module to use with the redux dev tools chrome extension

// Import all reducers to be combined by combineReducers()
import global from './global/index';
import RoomList from './RoomList/index';
import Room from './Room/index';

export default createStore(
  combineReducers({
    global,
    RoomList,
    Room
  }),
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)
// createStore() takes two/three arguments:
  // (1) a reducer (most likely the root reducer)
  // (2) an initial state (combineReducers() returns the initial states of the reducers passed to it) ** there must be a default/initial state, in every case, however.
  // (3) a store enhancer (allows middleware to be used) ** composeWithDevTools() is a wrapper for middleware to be compatible with the redux dev tools chrome extension
