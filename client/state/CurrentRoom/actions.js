  export const updateMessages = (messages) => {
    return {
      type: 'UPDATE_MESSAGES',
      messages: messages
    }
  }

  export const setMyUsername = (username) => {
    return {
      type: 'SET_MY_USERNAME',
      username: username
    }
  }

  export const updateUsers = (users) => {
    return {
      type: 'UPDATE_USERS',
      users: users
    }
  }

  export const addMessage = (message) => {
    return {
      type: 'ADD_MESSAGE',
      sender: message.sender,
      body: message.body,
      roomID: message.roomID,
      id: message.id
      // createdAt: message.created_at
    }
  }

  export const setCurrentRoomId = (id) => {
    return {
      type: 'SET_CURRENT_ROOM_ID',
      id: id
    }
  }
