// Import vendor modules
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Import css
import './public/css/app.css';

import App from './modules/App';

import store from './modules/AppReducer'; // import Redux store

store.subscribe(()=>{
  console.log('new client state', store.getState());
});
store.dispatch({type:'server/hello', data:'Hello!'});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
