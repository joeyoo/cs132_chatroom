const User = {
  tableName: 'user',
  properties: {
    id: { type: 'serial', key: true },
    username: { type: 'text' }
  }
}

export default User;
