/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const bodyParser = require('body-parser');
// const querystring = require('querystring');
// const url = require('url');
const cors = require('cors');
// const db = require('../database/index.js');
const db = require('../database/index.js');

const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/description', (req, res) => {
  let id = req.query.prod_id;
  id = Number(id);
  db.query(id, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

// app.post('/description', (req, res) => {
//   let id = req.query.prod_id;
//   id = Number(id);
//   db.add(id, (err) => {
//     if (err) {
//       res.send(err);
//     }
//   });
//   res.end();
// });

// app.put('/description', (req, res) => {
//   let id = req.query.prod_id;
//   id = Number(id);
//   db.update(id, (err) => {
//     if (err) {
//       res.send(err);
//     }
//   });
//   res.end();
// });

// app.delete('/description', (req, res) => {
//   let id = req.query.prod_id;
//   id = Number(id);
//   db.remove(id, (err) => {
//     if (err) {
//       res.send(err);
//     }
//   });
//   res.end();
// });


module.exports = app;
