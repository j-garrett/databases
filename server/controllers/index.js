var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      // request will contain an object what message or user it wants
      // then parse the the request into mysql query
      // we then use models.messages.get to query it from database
      console.log('REQUEST BY CONTROLLER TO MODEL IS: ', req);
      models.messages.get();

      // once we get the data from database
      // write to response
      // response.end()

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // request will contain an object message/users
      // use models.messages.post to post it into database
      models.messages.post(req.body);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

    },
    post: function (req, res) {
      models.users.post(req.body.username);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end();
    }
  }
};

