function Message(reqParams, reqBody) {
  reqBody = reqBody || {
    sender: 'text',
    body: 'text'
  };
  reqParams = reqParams || {
    roomID: 'text'
  }

  this.id = "";
  this.roomID = reqParams.roomID;
  this.sender = reqBody.sender;
  this.body = reqBody.body;
  this.createdAt = this.setCreatedAt();
}

Message.prototype.setID = function(id) {
  this.id = id;
}

Message.prototype.setCreatedAt = function(createdAt) {
  return createdAt;
}

module.exports = Message;
