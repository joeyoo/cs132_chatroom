function Chatroom(params) {
  this.id = params.id || '';
  this.users = params.users || {};
  this.userCount = params.userCount || this.userCount();
}

Chatroom.prototype.userCount = function() {
  return Object.keys(this.users).length;
}

Chatroom.prototype.generateID = function(currentIDs) {
  var uuid = require('uuid/v4');

  currentIDs = currentIDs || [];

  var uniqueID;

  var potentialIDs = uuid().replace(/[-]/g, "").match(/.{6}/g);
  // uuid() returns 36 char string w/ alphanumeric values separated by 4 hyphens (i.e. '110ec58a-a0f2-4ac4-8393-c866d813b8d1')
  // ".replace(/[-]/g)" removes the hyphens
  // ".match(/.{6}/g)" splits every 6 chars into an array
  // ** the remaining 2 chars of the 32 char string are ignored by the /.{6}/ regexp, thus returning 30/6 array elements
  // the returned value of "potentialIDs" is an array[5] of six alphanumeric chars (i.e. ["110ec5", "8aa0f2", "4ac483", "93c866", "d813b8"])

  if (currentIDs == []) {
    uniqueID = potentialIDs[0] // if there are no currentIDs, uniqueID is safely set to potentialIDs[0]
  }
  else {

    for (var i = 0; i < potentialIDs.length; i++) {

      var potentialID = potentialIDs[i];

      for (var c = 0; c < currentIDs.length + 1; c++) {
        if ( potentialID == currentIDs[c] ) break; // break out of loop if potentialID is taken in currentIDs
        if ( currentIDs[c] == null ) uniqueID = potentialID; // currentIDs[c] will return null at the end of the loop, meaning the potentialID was not matched by the currentIDs. Thus we can assign potentialID to uniqueID...
      };

      if (uniqueID) break; // ... and break out of the encompassing loop
    };

  }


  if (uniqueID) {
    this.id = uniqueID;
  }
  else {
    this.generateID(currentIDs);
  };
}

module.exports = Chatroom;
