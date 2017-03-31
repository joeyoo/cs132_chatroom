// Import vendor modules
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Foundation, {Row, Column} from 'react-foundation';

// Import css
import './public/css/app.css';

import {
  Header, RoomList, Room, RoomDetails, Footer, // import components
  store // import store
} from './modules/index';

render(
  <Provider store={store}>
    <Row large={12} id='app'>
      <Row large={12}>
        <Header />
      </Row>

      <Row large={12}>
        <RoomList />

        <Room />

        <RoomDetails />
      </Row>

      <Row large={12}>
        <Footer />
      </Row>
    </Row>
  </Provider>,
  document.getElementById('app')
)
