CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
  username_id INT(15), /* foreign keys */
  roomname_id INT(15), /* foreign keys */
  message TEXT(500),
  time_posted timestamp /* Is this auto generated? */
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
  username_id INT(15), /* foreign keys */
  roomname_id INT(15) /* foreign keys */
);

CREATE TABLE following_join (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  user_id INT(15), /* foreign keys */
  following_id INT(15) /* foreign keys */
);

/* Alter table is not yet functioning. Need to make usernames unique*/
-- ALTER TABLE users ADD UNIQUE (username);
ALTER TABLE users ADD CONSTRAINT UQ_username UNIQUE (username);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql -p
 *  to create the database and the tables.*/

/* AUTO GENERATED SQL CODE FROM http://ondras.zarovi.cz/sql/demo/
-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Users'
-- 
-- ---

DROP TABLE IF EXISTS `Users`;
    
CREATE TABLE `Users` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `Username` CHAR(20) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Messages'
-- 
-- ---

DROP TABLE IF EXISTS `Messages`;
    
CREATE TABLE `Messages` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `User` CHAR NULL DEFAULT NULL,
  `Room` CHAR NULL DEFAULT NULL,
  `Message` MEDIUMTEXT(300) NULL DEFAULT NULL,
  `Timestamp` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Users/Rooms Join'
-- 
-- ---

DROP TABLE IF EXISTS `Users/Rooms Join`;
    
CREATE TABLE `Users/Rooms Join` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `Username` CHAR NULL DEFAULT NULL,
  `Room Name` CHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Rooms'
-- 
-- ---

DROP TABLE IF EXISTS `Rooms`;
    
CREATE TABLE `Rooms` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `Room Name` CHAR(15) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Friends'
-- 
-- ---

DROP TABLE IF EXISTS `Friends`;
    
CREATE TABLE `Friends` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `User` INTEGER NULL DEFAULT NULL,
  `Following` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `Messages` ADD FOREIGN KEY (User) REFERENCES `Users` (`id`);
ALTER TABLE `Messages` ADD FOREIGN KEY (Room) REFERENCES `Rooms` (`id`);
ALTER TABLE `Users/Rooms Join` ADD FOREIGN KEY (Username) REFERENCES `Users` (`id`);
ALTER TABLE `Users/Rooms Join` ADD FOREIGN KEY (Room Name) REFERENCES `Rooms` (`id`);
ALTER TABLE `Friends` ADD FOREIGN KEY (User) REFERENCES `Users` (`id`);
ALTER TABLE `Friends` ADD FOREIGN KEY (Following) REFERENCES `Users` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Users/Rooms Join` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Rooms` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Friends` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Users` (`id`,`Username`) VALUES
-- ('','');
-- INSERT INTO `Messages` (`id`,`User`,`Room`,`Message`,`Timestamp`) VALUES
-- ('','','','','');
-- INSERT INTO `Users/Rooms Join` (`id`,`Username`,`Room Name`) VALUES
-- ('','','');
-- INSERT INTO `Rooms` (`id`,`Room Name`) VALUES
-- ('','');
-- INSERT INTO `Friends` (`id`,`User`,`Following`) VALUES
-- ('','','');
*/