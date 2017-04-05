var dbConnection = require('../db/database.js');
var Chatroom = require('../models/Chatroom.js');

exports.GET = function(req, res) {
  var sql = "SELECT * FROM chatrooms;";
  dbConnection.query(sql, function(error, data) {
    if (error) console.error(error);
    res.json(data.rows);
    console.log(__filename, "\n", data.rows);
  });
};

exports.POST = function(req, res) {

var currentIDs = [];
  dbConnection.query("SELECT id FROM chatrooms;", function(err,data) {
    if (err) return console.error(err);
    currentIDs = data;
  });

var roomName;
  if (req.body.roomName) roomName = req.body.roomName;

var sql = "INSERT INTO chatrooms (id,name) VALUES ($1,$2);";
var chatroom = new Chatroom(roomName, currentIDs);
  dbConnection.query(sql, [chatroom.id, chatroom.name], function(err,data) {
    if (err) console.error;
    res.json(data);
  });
}
