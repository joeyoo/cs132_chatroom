export const setCurrentRoom = (room) => {
  return {
    type: 'SET_CURRENT_ROOM',
    currentRoom: room
  }
}

export const joinRoom = (username, roomID) => {
  return {
    type: 'JOIN_ROOM',
    username: username,
    roomID: roomID
  }
}

export const selectRoom = (room) => {
  return {
    type: 'SELECT_ROOM',
    selectedRoom: room
  }
}
