const dotenv = require('dotenv');

dotenv.config();
module.exports = {
  pgpassword: process.env.PASSWORD,
};
