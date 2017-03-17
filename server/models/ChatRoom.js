const ChatRoom = {
  tableName: 'chatroom',
  properties: {
    id: { type: 'text', size: 6 , key: true },
    name: { type: 'text' }
  }
}

export default ChatRoom;
