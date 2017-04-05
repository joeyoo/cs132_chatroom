// Import Modules
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

// Import Controllers
var chatroomsController = require('./controllers/chatrooms.js');
var messagesController = require('./controllers/messages.js');

var Router = express();
  Router.use([cors(), bodyParser.json()]);

// Begin listening with a success callback
Router.listen(8080, function() {
  console.log('Listening on port 8080');
});

/*
  /api/chatrooms
*/
Router.get('/api/GET/chatrooms', chatroomsController.GET);
Router.post('/api/POST/chatrooms', chatroomsController.POST);

/*
  /api/messages
*/
Router.get('/api/:roomID/messages', messagesController.GET);
Router.post('/api/:roomID/messages', messagesController.POST);
