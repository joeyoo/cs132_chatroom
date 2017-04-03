const DEFAULT_STATE = {
  messages: [],
  messageIncoming: false
}

const Room = (state = DEFAULT_STATE, action) => {
  switch(action.type){
    case 'UPDATE_MESSAGES':
      return {...state, messages: action.messages}
    case 'MESSAGE_INCOMING':
      return {...state, messageIncoming: action.messageIncoming}
    default:
      return state;
  }
}

export default Room;
