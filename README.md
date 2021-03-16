<div>
  <img src="https://i.imgur.com/8rIM2Tz.png" width=61.5%>
</div>


# Forum Application


## About

> My final project for the Texas A&M University - Kingsville web development bootcamp.
> This application allows users login or register. Once they do so they are able to post, browse, and comment on forums. 




## Getting Started

### Prerequisites

* Node >= 10.16
* npm >= 5.6

### Installing

Get the project up and running locally by following the steps below.

1. Create a personal [Fork](https://github.com/edgars61/Question-and-Answer-Forum) of this repository.

2. **Clone** the fork with HTTPS, using your local terminal to a preferred location, and **cd** into the project.

```bash
git clone https://github.com/edgars61/Question-and-Answer-Forum

Cloning into 'Question-and-Answer-Forum'...
remote: Enumerating objects: 9541, done.
remote: Counting objects: 100% (9541/9541), done.
remote: Compressing objects: 100% (6763/6763), done.
remote: Total 9541 (delta 2308), reused 9365 (delta 2148), pack-reused 0
Receiving objects: 100% (9541/9541), 10.28 MiB | 12.60 MiB/s, done.
Resolving deltas: 100% (2308/2308), done.
Checking out files: 100% (8944/8944), done.



cd Question-and-Answer-Forum/
```
3. Install dependencies

```bash
cd client
npm install

cd ..
cd server
npm install
```

4. Set up database

```In MySQL Workbench 
create TABLE users( userID INT NOT NULL AUTO_INCREMENT, 
userFName VARCHAR(20), 
userLName VARCHAR(20), 
userEMail VARCHAR(45), 
userPassword VARCHAR(45), 
createdDate DATE, 
PRIMARY KEY (userID) 
);



CREATE TABLE forums ( forumsID INT NOT NULL AUTO_INCREMENT, 
userID INT, 
forumsTitle VARCHAR(100), 
forumsDescription VARCHAR(55), 
forumsDate DATE, 
topic VARCHAR(100),
FOREIGN KEY (userID) REFERENCES users(userID),
PRIMARY KEY (forumsID)


);

create TABLE comments( commentsID INT NOT NULL AUTO_INCREMENT, 
forumsID INT, 
userID INT, 
commentsDescription VARCHAR(100), 
commentsDate DATETIME, 
PRIMARY KEY (commentsID), 
FOREIGN KEY (userID) REFERENCES users(userID) 
);


Configure database in config.js
module.exports = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: '<Your Password',
  DB: '<Name of database you created'
};

```

4. Run local server, and **DONE**!

```bash
Open two windows navigate to the client folder

npm start

In the other navigate to the server folder

node server.js
```



## Built With

* [React](https://reactjs.org/) React is an open-source, front end, JavaScript library for building user interfaces or UI components.
* [React](https://nodejs.org/en/) Node is a JavaScript runtime built on Chrome's V8 JavaScript engine.
* [Expressjs](https://expressjs.com/)
* [Ant Design](https://ant.design/)
* [Bootstrap](https://getbootstrap.com/)













