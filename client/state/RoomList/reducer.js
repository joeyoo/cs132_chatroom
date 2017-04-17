const DEFAULT_STATE = {
  currentRooms: []
}

const RoomList = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case 'UPDATE_ROOMS_LIST':
      return {...state, currentRooms: action.currentRooms }
    case 'ADD_ROOM_TO_LIST':
      let currentRooms = state.currentRooms;
      currentRooms.push(action.room);
      return {...state, currentRooms: currentRooms }
    default:
      return state
  }
}

export default RoomList;
