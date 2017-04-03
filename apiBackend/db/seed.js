// INPUT SEED DATA HERE

var Chatroom = require('../models/Chatroom.js');
var Message = require('../models/Message.js');

module.exports = function(pool) {

  // for (var i = 0; i < 4; i++) {
  //   var chatroom = new Chatroom([]);
  //
  //   pool.query("INSERT INTO chatrooms (id) VALUES ('" + chatroom.id + "');")
  //     .on('error', console.error)
  //     .on('done', console.log);
  // };

  for (var i = 0; i < 9; i++) {
    var reqBody = {
      sender: "'nickname'",
      body: "'this is the body of the message'"
    };
    var reqParams = {
      roomID: "'949034'"
    };

    var message = new Message(reqBody,reqParams);

    pool.query("INSERT INTO messages (sender,room_id,body) VALUES ("+message.sender+","+message.roomID+","+message.body+");")
      .on('error', console.error)
      .on('done', console.log);
  };

}
