var models = require('../models');
var orm = require('../../orm-resources/orm-example.js');
var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', 'new');
var Promise = require('bluebird');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get()
      .then(function(content) {
        // console.log('__controllers L11 content ', content[0].username_id);
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(content));
      })
      .catch(function(err) {
        // console.log(err);
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('ended with an error');
      });
      // orm.User.sync()
      //           .then(function() {
      //             // Now instantiate an object and save it:
      //             return User.create({username: 'Jean Valjean'});
      //           })
      //           .then(function() {
      //             // Retrieve objects from the database:
      //             return User.findAll({ where: {username: 'Jean Valjean'} });
      //           })
      //           .then(function(users) {
      //             users.forEach(function(user) {
      //               console.log(user.username + ' exists');
      //             });
      //             db.close();
      //           })
      //           .catch(function(err) {
      //             // Handle any error in the chain
      //             console.error('error: ', err);
      //             db.close();
      //           });
    }, 
    post: function (req, res) {

      console.log('__controllers L29: ', req.body);
      // request will contain an object message/users
      // use models.messages.post to post it into database
      models.messages.post(req.body);
      // res.writeHead(200, {'Content-Type': 'text/html'});
      res.end();
    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {
    },
    post: function (req, res) {
      models.users.post(req.body.username);
      // var username = req.body.username;
      // orm.Users.sync()
      //   .then(function() {
      //     return User.create({username: 'BOBERTO'});
      //   })
      //   .catch(function(err) {
      //     console.log('error', err);
      //   });




      // res.writeHead(200, {'Content-Type': 'text/html'});
      res.end();
    }
  }
};

