/* eslint-disable func-names */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-restricted-syntax */
const formatter = function (data) {
  const emptyData = {
    item_number: '',
    list_date: '',
    item_spec: {
      condition: '',
      brand: '',
      type: '',
      packaging: '',
      material: '',
      rec_age: '',
      char_family: '',
      manfactured: '',
      era: '',
      year: '',
      size: '',
      upc: '',
    },
    seller_msg: {
      prod_des: '',
      item_des: '',
      img_url: '',
    },
  };

  data = data[0];
  const categoryList = Object.keys(data);

  function insert(keyString) {
    if (emptyData[keyString] === '') {
      emptyData[keyString] = data[keyString];
    } else if (emptyData.item_spec[keyString] === '') {
      emptyData.item_spec[keyString] = data[keyString];
    } else if (emptyData.seller_msg[keyString] === '') {
      emptyData.seller_msg[keyString] = data[keyString];
    }
  }

  categoryList.forEach((catagory) => {
    insert(catagory);
  });

  return emptyData;
};
