const sql = require('../database/db.js');

const Forums = function(forums) {
  this.forumsID = forums.forumsID;
  this.userID = forums.userID;
  this.forumsTitle = forums.forumsTitle;
  this.forumsDescription = forums.forumsDescription;
  this.forumsDate = forums.forumsDate;
  this.topic = forums.topic;
};

Forums.create = (newForums, result) => {
  sql.query('INSERT INTO forums SET ?', newForums, (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
      return;
    }

    result(null, {forumsID: res.insertId, ...newForums });
  });
};

Forums.getAllForums = result => {
  sql.query('SELECT forums.*, users.* from forums LEFT JOIN users on forums.userID = users.userID ORDER BY forumsDate DESC', (err, res) => {
    if (err) {
      console.log('error:', err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};

Forums.getPostbyTopic = (topic, result) => {
  console.log(topic);
  sql.query(`SELECT * FROM forums WHERE topic = ?`,topic, (err, res) => {
    if (err) {
      console.log('error:', err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};

module.exports = Forums;