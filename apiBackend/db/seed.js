// INPUT SEED DATA HERE

var Chatroom = require('../models/Chatroom.js');

module.exports = function(pool) {

  for (var i = 0; i < 4; i++) {
    var chatroom = new Chatroom([]);

    pool.query("INSERT INTO chatrooms (id) VALUES ('" + chatroom.id + "');")
      .on('error', console.error)
      .on('done', console.log);
  };

}
