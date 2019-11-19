const { Product, Purchase } = require('./schema.js');

const query = (item, cb) => {
  const prodInfo = [];
  queryProd(item, (err, res) => {
    if (err) {
      cb(err);
    } else {
      prodInfo.push(res);
      queryPurc(item, (err, res) => {
        if (err) {
          cb(err);
        } else {
          prodInfo.push(res);
          cb(null, prodInfo);
        }
      });
    }
  });
};

let queryProd = (itemNum, cb) => {
  Product.findOne({ item_number: itemNum }, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res);
    }
  });
};

let queryPurc = (itemNum, cb) => {
  Purchase.findOne({ item_number: itemNum }, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res);
    }
  });
};

const remove = (itemNum, cb) => {
  // finish
  Product.deleteOne({ item_number: itemNum }, (err) => {
    if (err) {
      cb(err);
    } else {
      Purchase.deleteOne({ item_number: itemNum }, (err) => {
        if (err) {
          cb(err);
        }
      });
    }
  });
};

const add = (itemNum, cb) => {
  // finish
  Product.create([{ item_number: itemNum }, { seller_msg: { prod_des: 'created' } }], (err) => {
    if (err) {
      cb(err);
    } else {
      Purchase.create([{ item_number: itemNum }, { ship_handling: { item_location: 'created' } }], (err) => {
        if (err) {
          cb(err);
        }
      });
    }
  });
};

const update = (itemNum, data, cb) => {
  // finish
  // if (data) {
  //   Product.update({ item_number: itemNum }, data, (err) => {
  //     if (err) {
  //       cb(err);
  //     }
  //   });
  // } else {
  Product.updateOne({ item_number: itemNum }, { seller_msg: { prod_des: 'updated' } }, (err) => {
    if (err) {
      cb(err);
    }
    // else {
    //   Purchase.updateOne({ item_number: itemNum }, { ship_handling: { item_location: 'updated' } }, (err) => {
    //     cb(err);
    //   });
    // }
  });
  // }
};

module.exports = {
  query,
  queryProd,
  queryPurc,
  remove,
  add,
  update,
};
