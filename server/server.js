import sqlite3 from 'sqlite3';
import express from 'express';
import orm from 'orm';

// Import Models
import UserModel from './models/User.js';
import ChatRoomModel from './models/ChatRoom.js';
import MessageModel from './models/Message.js';

let app = express();
let db = new sqlite3.Database(':memory:');

app.use(orm.express(db, {
  const User = db.define( UserModel.tableName, UserModel.properties);

  const ChatRoom = db.define( ChatRoomModel.tableName, ChatRoomModel.properties );

  const Message = db.define( MessageModel.tableName, MessageModel.properties );

  Message.hasOne('user', User, reverse: 'messages');
  Message.hasOne('chatroom', ChatRoom, reverse: 'messages');

  User.hasOne('chatroom', ChatRoom, reverse: 'users');
}));

app.listen(8080);
