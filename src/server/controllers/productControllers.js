const data = require('../database/data.json');

function getAllProducts() {
  return data.products;
}

function getProductByID(productID) {
  return data.products.find((p) => p.id === productID);
}

module.exports = {
  getAllProducts,
  getProductByID,
};
