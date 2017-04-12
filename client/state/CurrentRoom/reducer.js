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
    default:
      return state;
  }
}

export default CurrentRoom;
