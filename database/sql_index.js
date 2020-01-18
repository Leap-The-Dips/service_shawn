/* eslint-disable max-len */
const { pgpassword } = require('../config');

const knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'shawnchambers',
    password: pgpassword,
    database: 'ebay',
  },
});


const getProductByNumber = (prodNum, cb) => {
  knex('service_troy.products').where('item_number', prodNum.toString())
    .then((data) => {
      cb(data);
    })
    .error((err) => {
      cb(err);
    });
};


module.exports = {
  getProductByNumber,
};


/*
create schema service_troy;
create table products (item_number int PRIMARY KEY,list_date timestamp with time zone, condition text, brand text, type text, packaging text, material text, rec_age int, char_family text, manfactured text, era text, year int, size int, upc int, prod_des text, item_des text, img_url text);
*/
