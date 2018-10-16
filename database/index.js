require('dotenv').config();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_DATABASE,
  port     : process.env.DB_PORT || 3306
});
 

const getUserData = (callback) => {
  let query = 'SELECT * from members';
  connection.query(query, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

const getUserDetails = (userId, callback) => {
  let query = `SELECT * from members WHERE id = ?`;
  connection.query(query, [userId], (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
}

const updateUser = (values, callback) => {
  const { id, firstName, lastName, password, hometown, email, linkedIn, gitHub, hobbies, techInterests, proTip, image } = values;
  let query = 'UPDATE members SET firstName = ?, lastName = ?, password = ?, hometown = ?, email = ?, linkedIn = ?, gitHub = ?, hobbies = ?, techInterests = ?, proTip = ?, image = ? WHERE id = ?';
  connection.query(query, [firstName, lastName, password, hometown, email, linkedIn, gitHub, hobbies, techInterests, proTip, image, id], (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

module.exports = {
  getUserData,
  getUserDetails,
  updateUser
};