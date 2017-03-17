const Message = {
  tableName: 'message',
  properties: {
    id: { type: 'serial', key: true },
    content: { type: 'text' }
  }
}

export default Message;
