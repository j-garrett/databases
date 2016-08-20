var models = require('../models');
var Promise = require('bluebird');

module.exports = {
  messages: {
    get: function (req, res) {
      // request will contain an object what message or user it wants
      // then parse the the request into mysql query
      // we then use models.messages.get to query it from database
      // console.log('REQUEST BY CONTROLLER TO MODEL IS: ', req.body);
      models.messages.get()
      .then(function(content) {
        console.log('__controllers L11 content ', content);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(content);
      })
      .catch(function(err) {
        // console.log(err);
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('ended with an error');
      });

      // once we get the data from database
      // write to response
      // response.end()

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // request will contain an object message/users
      // use models.messages.post to post it into database
      models.messages.post(req.body);
      res.writeHead(201, {'Content-Type': 'text/html'});
      res.end();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
    },
    post: function (req, res) {
      models.users.post(req.body.username);
      res.writeHead(201, {'Content-Type': 'text/html'});
      res.end();
    }
  }
};

