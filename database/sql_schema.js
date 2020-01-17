/* eslint-disable max-len */
const knex = require('knex')({
  client: 'pg',
  connection: 'postgres://user:pass@localhost:5432/shawnchambers',
});

/*
create schema service_troy
create table products (item_number int, list_date date,
condition text, brand text, type text, packaging text, material text, rec_age int, char_family text,
manfactured text, era text, year int, size int, upc int);

create schema service_troy
create table products (item_number int,list_date date, condition text, brand text, type text, packaging text, material text, rec_age int, char_family text, manfactured text, era text, year int, size int, upc int, prod_des text, item_des text, img_url text)
*/
