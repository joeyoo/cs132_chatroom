import axios from 'axios';

import { CONSTANTS } from './index';

  export const updateRoomsList = (rooms) => {
    return {
      type: CONSTANTS.UPDATE_ROOMS_LIST,
      currentRooms: rooms
    }
  }

  export const fetchRoomsList = () => {
    return (dispatch) => {
      axios.get('http://localhost:8080/api/GET/chatrooms')
        .then((res) => {
          dispatch(updateRoomsList(res.data));
        })
        .catch((error) => console.error('async error', error))
    }
  }

  export const setCurrentRoom = (room) => {
    return {
      type: CONSTANTS.SET_CURRENT_ROOM,
      currentRoom: room
    }
  }
