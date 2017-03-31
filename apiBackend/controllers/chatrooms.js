var dbConnection = require('../db/database.js').pool;
var Chatroom = require('../models/Chatroom.js');

exports.index = function(req, res) {
  dbConnection.query("SELECT * FROM chatrooms;", function(err,data) {
    if (err) return console.error(err);
    res.json(data);
  })
};

exports.create = function(req, res) {
  var chatroom = new Chatroom();
  var currentIDs = [];

  dbConnection.query("SELECT id FROM chatrooms;", function(err,data) {
    if (err) return console.error(err);
    currentIDs = data;
  });

  chatroom.generateID(currentIDs);

  if (req.params.roomName) chatroom.setName(req.params.roomName);

  dbConnection.query("INSERT INTO chatrooms (id,name) VALUES (" + chatroom.id + "," + chatroom.name + ");")
    .on('err', console.error)
    // .on('data', res.json())
}
