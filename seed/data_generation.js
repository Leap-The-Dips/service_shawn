/* eslint-disable no-underscore-dangle */
const fs = require('fs');
const faker = require('faker');
const moment = require('moment');
const csvWriter = require('csv-write-stream');

const writer = csvWriter();

writer.pipe(fs.createWriteStream('./mock_data.csv', { encoding: 'utf-8' }));

const exists = () => (
  Math.floor(Math.random() * 2)
);

function writeTenMillionTimes(writerMethod, encoding, callback) {
  let i = 100;
  let index = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      index += 1;
      const data = {
        item_number: index,
        list_date: faker.date.recent(),
        condition: faker.lorem.word(),
        brand: (exists()) ? faker.commerce.productName() : null,
        type: (exists()) ? faker.lorem.words() : null,
        packaging: (exists()) ? faker.lorem.words() : null,
        material: (exists()) ? faker.lorem.words() : null,
        rec_age: (exists()) ? faker.random.number() : null,
        char_family: (exists()) ? faker.lorem.words() : null,
        manfactured: (exists()) ? faker.lorem.words() : null,
        era: (exists()) ? faker.lorem.words() : null,
        year: (exists()) ? moment(faker.date.past()).format('YYYY') : null,
        size: (exists()) ? faker.random.number() : null,
        upc: (exists()) ? faker.random.number() : null,
        prod_des: faker.lorem.paragraphs(),
        item_des: faker.lorem.sentence(),
        img_url: 'http://lorempixel.com/640/480/technics/',
      };
      if (i === 0) {
        // last time!
        writerMethod.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writerMethod.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writerMethod.once('drain', write);
    }
  }
  write();
}

writeTenMillionTimes(writer, 'utf-8', () => {
  console.log(process.uptime());
  writer.end();
});
