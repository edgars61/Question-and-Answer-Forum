
#Database Schema

CREATE TABLE forums (
    forumsID INT NOT NULL AUTO_INCREMENT,
    userID INT,
    forumsTitle VARCHAR(100),
    forumsDescription VARCHAR(55),
    forumsDate DATE,
    FOREIGN KEY (userID) REFERENCES users(userID)
    PRIMARY KEY (forumsID)
   
    
);


create TABLE users(
  userID INT NOT NULL AUTO_INCREMENT,
  userFName VARCHAR(20),
  userLName VARCHAR(20),
  userEMail VARCHAR(45),
  userPassword VARCHAR(45),
  createdDate DATE,
  PRIMARY KEY (userID)
);


create TABLE answers(
  commentsID INT NOT NULL AUTO_INCREMENT,
  forumsID INT,
  userID INT,
  commentsDescription VARCHAR(100),
  commentsDate DATETIME,
  PRIMARY KEY (commentsID),
  FOREIGN KEY (userID) REFERENCES users(userID)
)
