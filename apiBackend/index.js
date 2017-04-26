// Import Modules
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var http = require('http');
var socket_io = require('socket.io');

// Import Controllers
var chatroomsController = require('./controllers/chatrooms.js');
var messagesController = require('./controllers/messages.js');
var socketsController = require('./controllers/sockets.js');

var app = express();
  app.use([cors(), bodyParser.json()]);
var server = http.createServer(app);
var io = socket_io.listen(server);

io.on('connection', socketsController);

// Begin listening with a success callback
server.listen(8080, function() {
  console.log('Listening on port 8080');
});

/*
  /api/chatrooms
*/
app.get('/api/GET/chatrooms', chatroomsController.GET);
app.post('/api/POST/chatrooms', chatroomsController.POST);

/*
  /api/messages
*/
app.get('/api/:roomID/messages', messagesController.GET);
app.post('/api/:roomID/messages', messagesController.POST);
