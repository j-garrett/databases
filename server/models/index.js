var db = require('../db');
var Promise = require('bluebird');

module.exports = {
  messages: {
    get: function () { // a function which produces all the messages
      /////* insert queries to db here */////
      return new Promise(function(resolve, reject) {
        db.connection.query('SELECT * FROM messages;', function(err, content) {
          if (err) {
            console.log('error in models.messages.get: ', err);
            reject(err);
          } else {
            // console.log('models.messages.get content result: ', content);
            resolve(content);
          }
        });
      });
    },
    post: function (message) { // a function which can be used to insert a message into the database
      /////* insert insert actions to db here */////
      // parse the data and create a mysql query (insert into)
      var user = message.username;
      var roomname = message.roomname; //JSON.stringify(message.roomname);
      var message = JSON.stringify(message.text);
      // Need to build fetcher of unique keys for room and usernames 
      console.log('__models L27 Incoming message to message post: ', message)
      // query for user id
      var queryId = 'SELECT id FROM users WHERE username = ' + JSON.stringify(user) + ';';

      // query for room id
      var queryAddRoom = 'INSERT IGNORE INTO rooms (id, roomname) VALUES (NULL, ' + JSON.stringify(roomname) + ');';
      var queryRoom = 'SELECT id FROM rooms WHERE roomname = ' + JSON.stringify(roomname) + ';';

      db.connection.query(queryId, function(err, content) {
        if (err) {
          console.log('__models: ', err);
        } else {
          if (content.length === 0) {
            module.exports.users.post(user);
          } else {
            var userId = content[0].id;
            db.connection.query(queryRoom, function(err, content) {
              if (err) {
                console.log('__models: ', err);
              } else {
                if (content.length === 0) {
                  db.connection.query(queryAddRoom, function(err, content) {
                    if (err) {
                      console.log('__models: ', err);
                    } 
                  });
                } else {
                  var roomId = content[0].id;
                  console.log('__models L55: ' + 'INSERT INTO messages (id, username_id, roomname_id, message) VALUES (NULL, ' + userId + ',' + roomId + ',' + message + ');');
                  var addMessage = 'INSERT INTO messages (id, username_id, roomname_id, message) VALUES (NULL, ' + userId + ',' + roomId + ',' + message + ');';
                  db.connection.query(addMessage, function(err, content) {
                    if (err) {
                      console.log('Error inserting message: ', err);
                    }
                  });
                }
              }
            });
          }
        }
      });
    }
  },

  users: {
    get: function (user) {
      user = JSON.stringify(user);
      var query = 'SELECT id FROM users WHERE username = ' + user + ';';

      return new Promise(function(resolve, reject) {
        db.connection.query(query, function(err, content) {
          if (err) {
            reject(err);
          } else {
            resolve(content);
          }
        });
      });
    },
    post: function (user) {

      var query2 = 'INSERT IGNORE INTO users (id, username) VALUES (NULL, ' + JSON.stringify(user) + ');';
      var query = 'select * from users where username = ' + JSON.stringify(user) + ';';

      db.connection.query(query, function(err, content) {
        if (err) {
          console.log('user select error', err.code);
        } else {
          if (content.length === 0) {
            db.connection.query(query2, function(err, content) {
              if (err) {
                console.log('user post error', err.code);
              } 
            });
          }
        }
      });
    }
  }
};

