const INITIAL_STATE = {
  chatrooms: [],
  visitedRooms: [],
  currentRoom: {}
}

const Global = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SET_CURRENT_ROOM':
      return {...state, currentRoom: action.currentRoom}
    case 'ADD_ROOM_TO_VISITED':
      return {...state, visitedRooms: state.visitedRooms.push(action.room)}
    default:
      return state
  }
}

export default Global;
