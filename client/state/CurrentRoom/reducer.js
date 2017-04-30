const DEFAULT_STATE = {
  messages: [],
  users: [],
  myUsername: '',
  id: ''
}

const CurrentRoom = (state = DEFAULT_STATE, action) => {
  switch(action.type){
    case 'SET_CURRENT_ROOM_ID':
      return {...state, id: action.id}
    case 'UPDATE_USERS':
      return {...state, users: action.users}
    case 'UPDATE_MESSAGES':
      return {...state, messages: action.messages}
    case 'MESSAGE_INCOMING':
      return {...state, messageIncoming: action.messageIncoming}
    case 'SET_MY_USERNAME':
      return {...state, myUsername: action.username}
    case 'ADD_MESSAGE':
      return {...state, messages: [...state.messages, {
        sender: action.sender,
        body: action.body,
        roomID: action.roomID,
        id: action.id
      }]}
    default:
      return state;
  }
}

export default CurrentRoom;
