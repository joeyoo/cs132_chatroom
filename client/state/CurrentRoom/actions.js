import axios from 'axios';

import { CONSTANTS } from './index';

  export const updateMessages = (messages) => {
    return {
      type: CONSTANTS.UPDATE_MESSAGES,
      messages: messages
    }
  }

  export const addMessage = (message) => {
    return {
      type: CONSTANTS.ADD_MESSAGE,
      sender: message.sender,
      body: message.body,
      roomID: message.roomID,
      id: message.id
      // createdAt: message.created_at
    }
  }

  export const setMyUsername = (username) => {
    return {
      type: CONSTANTS.SET_MY_USERNAME,
      username: username
    }
  }
