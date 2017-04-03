const DEFAULT_STATE = {
  currentRoom: {},
  currentRooms: []
}

const RoomList = (state = DEFAULT_STATE, action) => {
  switch(action.type){
    case 'UPDATE_ROOMS_LIST':
      return {...state, currentRooms: action.currentRooms}
    case 'SET_CURRENT_ROOM':
      return {...state, currentRoom: action.currentRoom}
    default:
      return state
  }
}

export default RoomList;
