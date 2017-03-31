import axios from 'axios';

export const UPDATE_ROOMS_LIST = 'UPDATE_ROOMS_LIST';

  export const updateRoomsList = (rooms) => {
    return {
      type: UPDATE_ROOMS_LIST,
      currentRooms: rooms
    }
  }

export const FETCH_ROOMS_LIST = 'FETCH_ROOMS_LIST';

  export const fetchRoomsList = () => {
    return (dispatch) => {
      axios.get('http://localhost:8080/api/rooms')
        .then((res) => {
          dispatch(updateRoomsList(res.data));
        })
        .catch((error) => console.error('async error', error))
    }
  }
