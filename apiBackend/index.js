// Import Modules
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var http = require('http');
var socket_io = require('socket.io');

// Import db and models
var db = require('./db/database.js');
var Message = require('./models/Message.js');
var Chatroom = require('./models/Chatroom.js');

var app = express();
  app.use([cors(), bodyParser.json()]);
var server = http.createServer(app);
var io = socket_io.listen(server);

var userCounts = {}; // key: roomID, value: usercount

io.sockets.on('connection', function(socket) {
  console.log(socket.id + "  connected");

// send current chatrooms to connected client
  db.query("SELECT * FROM chatrooms;", function(err, data) {
    if (err) console.error(err);

    var chatrooms = data.rows;
    socket.chatrooms = data.rows;

    socket.emit('chatrooms', chatrooms);
  });

// listen for create room
  socket.on('createRoom', function() {
    var currentIDs = [];

    db.query("SELECT id FROM chatrooms;")
      .on('error', console.error)
      .on('data', function(row){
        currentIDs.push(row);
      })
      .on('end', function() {
        var chatroom = new Chatroom(currentIDs);

        db.query("INSERT INTO chatrooms (id) VALUES ($1);", [chatroom.id], function(response) {
          socket.chatrooms.push(chatroom);
          io.sockets.emit('chatrooms', socket.chatrooms);

          userCounts[chatroom.id] = 0;
        });

      });


  });

// listen for join room
  socket.on('joinRoom', function(data) {
    socket.join(data.roomID);
    socket.username = data.username;

    userCounts[data.roomID] += 1;

      db.query("SELECT * FROM messages WHERE room_id=$1;", [data.roomID], function(error, data) {
        if (error) console.error;

        socket.emit('getMessages', data.rows);
      })


    // socket.in(data.roomID).emit('userJoined', data);
  });

// listen for leave room
  socket.on('leaveRoom', function(data) {
    socket.leave(data.roomID);

    userCounts[roomID] -= 1;
  })

// listen for new message
  socket.on('message', function(message) {
    var sql = "INSERT INTO messages (sender,room_id,body) VALUES ($1,$2,$3);"

      db.query(sql, [message.sender,message.roomID,message.body], function(error, data) {
        if (error) console.error;

        message.id = data.lastInsertId;

        io.sockets.in(message.roomID).emit('message', message);

      });

  });

// listen for username create
  socket.on('createUsername', function(data){
    socket.username = data.username;
    socket.to(data.room).emit('newUsername', data);
  });

// listen for client disconnect
  socket.on('disconnect', function() {
    console.log(socket.id + " disconnected")
  });

});

// Begin listening with a success callback
server.listen(8080, function() {
  console.log('Listening on port 8080');
});
