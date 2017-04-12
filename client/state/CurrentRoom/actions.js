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
        console.log(res.data);
        dispatch(updateMessages(res.data));
      })
      .catch((error) => console.error);

    }
  }

  export const setMyUsername = (username) => {
    return {
      type: CONSTANTS.SET_MY_USERNAME,
      username: username
    }
  }
