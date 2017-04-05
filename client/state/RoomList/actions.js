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
        .catch((error) => console.error)
    }
  }

  export const addRoomToList = (room) => {
    return {
      type: CONSTANTS.ADD_ROOM_TO_LIST,
      room: room
    }
  }

  export const requestPostRoom = () => {
    return (dispatch) => {
      axios.post('http://localhost:8080/api/POST/chatrooms')
        .then((res) => {
          dispatch(addRoomToList(res.data));
          console.log(res.data);
        })
        .catch((error) => console.error)
    }
  }
