import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

export default function configureStore(reducers) {
  return createStore(
    combineReducers(reducers),
    applyMiddleware(thunk)
  )
}
