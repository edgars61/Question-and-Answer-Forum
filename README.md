<div>
  <img src="https://i.imgur.com/8rIM2Tz.png" width=61.5%>
</div>

This is the final capstone project for Texs A&M Web Development Bootcamp

This was created using React, Node.js, Express, Bootstrap, React Bootstrap, MySQL, and Ant Design



Database Schema needed to run project

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


create TABLE comments(
  commentsID INT NOT NULL AUTO_INCREMENT,
  forumsID INT,
  userID INT,
  commentsDescription VARCHAR(100),
  commentsDate DATETIME,
  PRIMARY KEY (commentsID),
  FOREIGN KEY (userID) REFERENCES users(userID)
)
