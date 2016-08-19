var db = require('../db');

module.exports = {
  messages: {
    get: function () { // a function which produces all the messages
      /////* insert queries to db here */////
    }, 
    post: function () { // a function which can be used to insert a message into the database
      /////* insert insert actions to db here */////
    } 
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

