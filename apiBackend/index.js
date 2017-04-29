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

// initialize server/listeners
var app = express();
  app.use([cors(), bodyParser.json()]);
var server = http.createServer(app);
var io = socket_io.listen(server);


var ROOMS = {};
/*
  ROOMS = {
    [roomId]: {
      users: {
        [socketId]: [username]
      },
      userCount: [number]
    }
  }
*/

io.sockets.on('connection', function(socket) {
console.log("client (", socket.id, ") CONNECTED");

  socket.joinedRooms = []; // will use to map through ROOMS and delete the client's username from each roomId, as well as decrement userCount by 1

/*
  QUERY chatrooms from db and emit to newly connected client
*/
  db.query("SELECT * FROM chatrooms;", function(err, data) {
    if (err) console.error(err);
    var queriedRooms = data.rows;

    var socketRooms = io.sockets.adapter.rooms;

    for (var i = 0; i < queriedRooms.length; i++) {
      var chatroomID = queriedRooms[i].id;

      var users = {}, userCount = 0;

      if (socketRooms[chatroomID]) {
        userCount = socketRooms[chatroomID].length;
        users = socketRooms[chatroomID].sockets;
      }

      ROOMS[chatroomID] = {
        users: users,
        userCount: userCount
      };

    }

    var chatrooms = makeChatrooms(ROOMS, Chatroom);

    socket.emit('chatrooms', chatrooms);
  });

/*
  generate unique id based on current ids and insert into db, then emit to all clients
*/
  socket.on('createRoom', function() {
    var currentIDs = [];

    db.query("SELECT id FROM chatrooms;")
      .on('error', console.error)
      .on('data', function(row){
        currentIDs.push(row);
      })
      .on('end', function() {
        var chatroom = new Chatroom({});
        chatroom.generateID(currentIDs);

        db.query("INSERT INTO chatrooms (id) VALUES ($1);", [chatroom.id], function(r) {

          ROOMS[chatroom.id] = {
            users: chatroom.users,
            userCount: chatroom.userCount
          };

          var chatrooms = makeChatrooms(ROOMS, Chatroom);
          io.sockets.emit('chatrooms', chatrooms);
        });

      });


  });

/*
    JOIN ROOM
*/
  socket.on('joinRoom', function(data) {
    socket.join(data.roomID);

    ROOMS[data.roomID].users[socket.id] = data.username;
    ROOMS[data.roomID].userCount += 1;

    socket.joinedRooms.push(data.roomID);

console.log("client (" + socket.id + ") JOINED (" + data.roomID + ") AS (" + data.username + ")");

      db.query("SELECT * FROM messages WHERE room_id=$1;", [data.roomID], function(error, d) {
        if (error) console.error;

        socket.emit('getMessages', d.rows);

        io.sockets.emit('getUsersOfRoom', objToArray(ROOMS[data.roomID].users));

        var chatrooms = makeChatrooms(ROOMS, Chatroom);
        io.sockets.emit('chatrooms', chatrooms);
      })
  });

// listen for new message
  socket.on('message', function(message) {
      db.query("INSERT INTO messages (sender,room_id,body) VALUES ($1,$2,$3);", [message.sender,message.roomID,message.body], function(error, data) {
        if (error) console.error;

        message.id = data.lastInsertId;

        io.sockets.in(message.roomID).emit('message', message);

      });

  });

// listen for username create
  socket.on('createUsername', function(data){

    socket.to(data.room).emit('newUsername', data);
  });

// listen for client disconnect
  socket.on('disconnect', function() {
    console.log("client (" + socket.id + ") DISCONNECTED");

    socket.joinedRooms.forEach(function(roomID) {
      delete ROOMS[roomID].users[socket.id];
      ROOMS[roomID].userCount -= 1;
    });

    var chatrooms = makeChatrooms(ROOMS, Chatroom);

    io.sockets.emit('chatrooms', chatrooms)
  });

});

// Begin listening with a success callback
server.listen(8080, function() {
  console.log('Listening on port 8080');
});

/*
  helper functions
*/
  var objToArray = function(obj) {
    var arr = [];
    for (var key in obj) {
      arr.push(key);
    };
    return arr;
  };

  var makeChatrooms = function(ROOMS, Chatroom) {
    var chatrooms = [];
    for (var id in ROOMS) {
      chatrooms.push(new Chatroom({id: id, users: ROOMS[id].users}))
    }
    return chatrooms;
  }
