const DEFAULT_STATE = {
  currentRoom: {},
  currentRooms: []
}

const RoomList = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case 'UPDATE_ROOMS_LIST':
      return {...state, currentRooms: action.currentRooms }
    case 'ADD_ROOM_TO_LIST':
      return {...state, currentRooms: state.currentRooms.push(action.room) }
    default:
      return state
  }
}

export default RoomList;
