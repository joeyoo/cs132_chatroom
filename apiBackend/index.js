// Import Modules
var express = require('express');
var cors = require('cors');

// Import Controllers
var chatroomsController = require('./controllers/chatrooms.js');

var Router = express();
  Router.use(cors()); // Enable Cross-origin requests

Router.listen(8080, function() {
  console.log('Listening on port 8080');
});

Router.get('/api/chatrooms', chatroomsController.index);
Router.post('/api/chatrooms', chatroomsController.create);
