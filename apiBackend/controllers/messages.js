var pool = require('../db/database.js');
var Message = require('../models/Message.js');

exports.GET = function(req, res) {

var sql = "SELECT * FROM messages WHERE room_id=$1;";
  pool.query(sql, [req.params.roomID], function(error, data) {
    if (error) console.error;
    res.json(data.rows);
  })
};

exports.POST = function(req, res) {

var sql = "INSERT INTO messages (sender,room_id,body) VALUES ($1,$2,$3);"
var message = new Message(req.params, req.body);

  pool.query(sql, [message.sender,message.roomID,message.body], function(error, data) {
    if (error) console.error;
    message.setID(data.lastInsertId);

    pool.query("SELECT * FROM messages WHERE id=$1 AND room_id=$2 LIMIT 1;", [message.id, message.roomID], function(error, data) {
      if (error) console.error;
      res.json(data.rows[0]);
      console.log(__filename, "\npost messages: ", data.rows);
    });
  });

};
