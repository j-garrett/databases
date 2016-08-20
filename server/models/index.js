var db = require('../db');

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


    } 
  },

  users: {
    // Ditto as above.
    get: function (user) {
      // get unique key for user 
      user = JSON.stringify(user);
      var query = 'SELECT id FROM users WHERE username = ' + user + ';';
      var getUserId = function(cb) {
        db.connection.query(query, function(err, content) {
          if (err) {
            console.log('Users GET request error: ', err);
            throw err;
          }
          console.log(content);
          cb(content);
        });
      };
      db.connection.close();
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
      db.connection.query(query, function(err) {
        if (err) {
          console.log(err);
        }
      });
      // close connection to signal end of function
      db.connection.close();
    }
  }
};

