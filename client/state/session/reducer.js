const INITIAL_STATE = {
  joinedRooms: {},
  currentRoom: {},
  selectedRoom: {}
}

const Session = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SELECT_ROOM':
      return {...state, selectedRoom: action.selectedRoom}
    case 'SET_CURRENT_ROOM':
      return {...state, currentRoom: action.currentRoom}
    case 'JOIN_ROOM':
      return {...state, joinedRooms: {[action.roomID]:action.username, ...state.joinedRooms} }
    default:
      return state
  }
}

export default Session;
