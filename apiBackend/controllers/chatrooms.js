var dbConnection = require('../db/database.js');
var Chatroom = require('../models/Chatroom.js');

exports.GET = function(req, res) {
  var sql = "SELECT * FROM chatrooms;";
  dbConnection.query(sql, function(error, data) {
    if (error) console.error(error);
    res.json(data.rows);
    console.log(__filename, "\nGET chatrooms: ", data.rows);
  });
};

exports.POST = function(req, res) {
  var currentIDs = [];

  dbConnection.query("SELECT id FROM chatrooms;")
    .on('error', console.error)
    .on('data', function(row){
      currentIDs.push(row);
    })
    .on('end', function() {
      var chatroom = new Chatroom(currentIDs);

      dbConnection.query("INSERT INTO chatrooms (id) VALUES ($1);", [chatroom.id], function(err,data) {
        if (err) console.error;
        res.json(data);
        console.log(data);
      });

    });

}
