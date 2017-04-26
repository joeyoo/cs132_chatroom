module.exports = function(socket) {
  socket.on('joinRoom', function(roomID, username) {
    socket.join(roomID);
    socket.username = username;
    console.log("roomid: " + roomID);
    console.log("username: " + username);
  });

  socket.on('nickname', function(nickname){
      socket.nickname = nickname;
      //broadcast update to room! (see below)
  });

  // the client emits this when they want to send a message
  socket.on('message', function(message){
      // process an incoming message (don't forget to broadcast it to everyone!)

      // note that you somehow need to determine what room this is in
      // io.of(namespace).adapter.rooms[socket.id] may be of some help, or you
      // could consider adding another custom property to the socket object.

      // Note that io.sockets.adapter.sids is a hash mapping
      // from room name to true for all rooms that the socket is in.
      // The first member of the list is always the socket itself,
      // and each successive element is a room the socket is in,
      // So, to get the room name without adding another custom property,
      // you could do something like this:

      var roomName = Object.keys(io.sockets.adapter.sids[socket.id])[1];

      // then send the message to users!
  });

  // the client disconnected/closed their browser window
  socket.on('disconnect', function(){
      // Leave the room!
  });

  // an error occured with sockets
  socket.on('error', function(){
      // Don't forget to handle errors!
      // Maybe you can try to notify users that an error occured and log the error as well.
  });
};
