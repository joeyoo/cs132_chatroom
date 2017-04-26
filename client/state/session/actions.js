import io from 'socket.io-client';

export const setCurrentRoom = (room) => {
  return {
    type: 'SET_CURRENT_ROOM',
    currentRoom: room
  }
}

export const joinRoom = (username, roomID) => {
  io("http://localhost:8080").emit('joinRoom', roomID, username);
  return {
    type: 'JOIN_ROOM',
    username: username,
    roomID: roomID
  }
}
