import Controller from './Controller';

class ChatRoomsController extends Controller {
  constructor() {
    super;
  }

  index() {
    this.server.get('/chatrooms', function(req, res) {
      database.query('SELECT * FROM chatrooms', function(err, data) {
        res.send(data);
      })
    })
  }

  create(req, res) {

  }
};
