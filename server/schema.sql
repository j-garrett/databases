CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
  username_id INT(15),
  roomname_id INT(15),
  message TEXT(500),
  time_posted timestamp
);



/* Create other tables and define schemas for them here! */

CREATE TABLE users (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username CHAR(20)
);

CREATE TABLE rooms (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  roomname CHAR(20)  
);

CREATE TABLE users_rooms_join (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username_id INT(15),
  roomname_id INT(15)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql -p
 *  to create the database and the tables.*/

