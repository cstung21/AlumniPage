require('dotenv').config();
const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const db = require('../database');

app.use('/', express.static(path.join(__dirname, '../client/dist')));


app.get('/users', (req, res) => {
  db.getUserData((err, data) => {
    if (err) {
      console.log('ERROR getting user list from database: \n', err);
      res.status(500).send('ERROR');
    } else {
      console.log('SUCCESSFULLY retrieved user list from database: \n', data);
      res.status(200).send(data);
    }
  })
});

app.get('/users/:id', (req, res) => {
  db.getUserDetails(req.params.id, (err, data) => {
    if (err) {
      console.log('ERROR getting user details from database: \n', err);
      res.status(500).send('ERROR');
    } else {
      console.log(`SUCCESSFULLY retrieved details for user ${req.params.id} from database: \n`, data);
      res.status(200).send(data);
    }
  })
});

app.put('/users', bodyParser.json(), (req, res) => {
  console.log('HERE IS THE REQ.BODY!!!', req.body);

  db.updateUser(req.body, (err, data) => {
    if (err) {
      console.log('ERROR updating user record: \n', err);
      res.status(500).send('ERROR');
    } else {
      console.log(`SUCCESSFULLY updated user record for user ${req.body.id}: \n`, data);
      res.status(201).send(data);
    }
  });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
