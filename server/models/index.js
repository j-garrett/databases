var db = require('../db');
var Promise = require('bluebird');

module.exports = {
  messages: {
    get: function (query) { // a function which produces all the messages

      /////* insert queries to db here */////

    }, 
    post: function (message) { // a function which can be used to insert a message into the database
      /////* insert insert actions to db here */////
      // parse the data and create a mysql query (insert into)
      var user = module.exports.users.get(message.username);
      var roomname = 1; //JSON.stringify(message.roomname);
      var message = JSON.stringify(message.message);
      // Need to build fetcher of unique keys for room and usernames 
      var query = 'INSERT INTO messages (id, username_id, roomname_id, message) VALUES (NULL, ' + user + ',' + roomname + ',' + message + ');';

      module.exports.users.get('jonjon')
        .then(function(val) {
          console.log('THIS IS THE RETURNED CONTENT: ', val);

        })
        .catch(function(err) {
          console.log('ERROR FOR GETTING CONTENT: ', err);

        });

    }
  },

  users: {
    // Ditto as above.
    get: function (user) {
      // get unique key for user 
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




      // var getUserId = function(cb) {
      //   db.connection.query(query, function(err, content) {
      //     if (err) {
      //       console.log('Users GET request error: ', err);
      //       throw err;
      //     }
      //     console.log(content);
      //     cb(content);
      //   });
      // };
      db.connection.end();
    },
    post: function (user) {
      // db.connection.connect();
      user = JSON.stringify(user);
      // Build query string
      var query = 'INSERT INTO users (id, username) VALUES (NULL, ' + user + ');';
      // Open data base connection
      // Add field to users table of chat database
      // pass query string to query function
      // Provide a callback for any errors

      // DON'T ADD USER IF USER IS THERE

      module.exports.users.get(user)
        .then(function(val) {
          console.log(val);
        });



      db.connection.query(query, function(err, content) {
        if (err) {
          console.log('USER POST QUERY ERROR: ', err);
        }
        console.log('USER POST QUERY CONTENT: ', content);
      });
      // close connection to signal end of function
      db.connection.end();
    }
  }
};

