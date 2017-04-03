var dbConnection = require('../db/database.js');
var Chatroom = require('../models/Chatroom.js');

exports.GET = function(req, res) {
  var sql = "SELECT * FROM chatrooms;";
  dbConnection.query(sql, function(error, data) {
    if (error) console.error(error);
    res.json(data.rows);
  });
};

exports.POST = function(req, res) {
  var chatroom = new Chatroom();
  var currentIDs = [];

  dbConnection.query("SELECT id FROM chatrooms;", function(err,data) {
    if (err) return console.error(err);
    currentIDs = data;
  });

  chatroom.generateID(currentIDs);

  if (req.body.roomName) chatroom.setName("'"+req.body.roomName+"'");

  var sql = "INSERT INTO chatrooms (id,name) VALUES ($1,$2);"

  dbConnection.query(sql, [chatroom.id, chatroom.name])
    .on('error', console.error)
    .on('data', res.json(data));
}
