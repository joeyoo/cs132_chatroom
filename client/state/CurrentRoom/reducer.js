const DEFAULT_STATE = {
  messages: [],
  users: [],
  messageIncoming: false,
  myUsername: ''
}

const CurrentRoom = (state = DEFAULT_STATE, action) => {
  switch(action.type){
    case 'UPDATE_MESSAGES':
      return {...state, messages: action.messages}
    case 'MESSAGE_INCOMING':
      return {...state, messageIncoming: action.messageIncoming}
    case 'SET_MY_USERNAME':
      return {...state, myUsername: action.username}
    case 'ADD_MESSAGE':
      let messages = state.messages;
      messages.push({
        sender: action.sender,
        body: action.body,
        roomID: action.roomID,
        id: action.id,
        createdAt: action.createdAt
      });
      return {...state, messages: messages}
    default:
      return state;
  }
}

export default CurrentRoom;
