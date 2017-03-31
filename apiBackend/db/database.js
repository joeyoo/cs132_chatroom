var anyDB = require('any-db');

var pool = anyDB.createPool('sqlite3://apiBackend/db/chatroom.db', {
  min: 2,
  max: 20
})

// Import database helper models
var Table = require('./models/Table.js');
var Column = require('./models/Column.js');

// 'messages' Table model
var messages = new Table("messages");
messages.addColumn(new Column("id", "INTEGER", "PRIMARY KEY AUTOINCREMENT"));
messages.addColumn(new Column("body", "TEXT"));
pool.query(messages.toSQL())
  .on('error', console.error)
  .on('data', console.log); // map to sql database

// 'chatrooms' Table model
var chatrooms = new Table("chatrooms");
chatrooms.addColumn(new Column("id", "TEXT", "PRIMARY KEY"));
chatrooms.addColumn(new Column("name", "TEXT"));
pool.query(chatrooms.toSQL())
  .on('error', console.error)
  .on('data', console.log); // map to sql database

module.exports = {
  pool: pool,
  messages: messages,
  chatrooms: chatrooms
};
