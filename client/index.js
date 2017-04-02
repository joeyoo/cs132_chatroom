// Import vendor modules
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Import css
import './public/css/app.css';

import App from './components/App';

import store from './components/AppReducer'; // import Redux store

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
