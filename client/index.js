// Import vendor modules
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import io from 'socket.io-client';
// Import css
import './public/css/app.css';
// Import App Component
import App from './components/App';

const REMOTE_URL = process.env.REMOTE_URL || 'http://localhost:3000';
// initialize and export client socket (in order to not initilize new client socket connections)
export const socket = io(REMOTE_URL);
// import redux store
import store from './state/rootReducer';
// import some redux actions to update store from socket events
import {CurrentRoomActions} from './state/actionsIndex';
const {updateUsers} = CurrentRoomActions;

// socket event listeners
socket.on('usersOfRoom', function(users) {
  store.dispatch(updateUsers(users)); // this will update the user list of the current room
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
