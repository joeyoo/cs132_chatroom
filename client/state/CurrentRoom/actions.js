import axios from 'axios';

import { CONSTANTS } from './index';

  export const updateMessages = (messages) => {
    return {
      type: CONSTANTS.UPDATE_MESSAGES,
      messages: messages
    }
  }

  export const fetchMessages = (roomID) => {
    return (dispatch) => {
      axios({
        method: 'get',
        url: "http://localhost:8080/api/" + roomID +"/messages"
      })
      .then((res) => {
        dispatch(updateMessages(res.data));
      })
      .catch((error) => console.error);

    }
  }

  export const addMessage = (message, roomID) => {
    return {
      type: CONSTANTS.ADD_MESSAGE,
      sender: message.sender,
      body: message.body,
      roomID: roomID
    }
  }

  export const postMessage = (message, roomID) => {
    return (dispatch) => {
      axios({
        method: 'post',
        url: 'http://localhost:8080/api/' + roomID + '/messages',
        data: {
          sender: message.sender,
          body: message.body
        }
      })
      .then((res)=>{
        dispatch(addMessage(message, roomID))
      })
      .catch((error)=> console.error)
    }
  }

  export const setMyUsername = (username) => {
    return {
      type: CONSTANTS.SET_MY_USERNAME,
      username: username
    }
  }
