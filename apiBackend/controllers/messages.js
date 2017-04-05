var pool = require('../db/database.js');
var Message = require('../models/Message.js');

exports.GET = function(req, res) {

var sql = "SELECT * FROM messages WHERE room_id=$1;";
  pool.query(sql, [req.params.roomID], function(error, data) {
    if (error) console.error;
    res.json(data.rows);
    console.log("roomID: " + req.params.roomID);
  })
};

exports.POST = function(req, res) {

var sql = "INSERT INTO messages (sender,room_id,body) VALUES ($1,$2,$3);"
var message = new Message(req.params, req.body);
  pool.query(sql, ["'"+message.sender+"'","'"+message.roomID+"'", "'"+message.body+"'"], function(error, data) {
    if (error) console.error;
    res.json(data);
  });
};
