const INITIAL_STATE = {
  joinedRooms: {},
  currentRoom: {}
}

const Session = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SET_CURRENT_ROOM':
      return {...state, currentRoom: action.currentRoom}
    case 'JOIN_ROOM':
      return {...state, joinedRooms: {[action.roomID]:action.username, ...state.joinedRooms} }
    default:
      return state
  }
}

export default Session;
