const express = require('express');
const {
  getAllProducts,
  getProductByID,
} = require('../controllers/productControllers');
const router = express.Router();

router.route('/').get((req, res, next) => {
  setTimeout(() => {
    res.json(getAllProducts());
  }, 2000);
});

router.route('/:id').get((req, res, next) => {
  setTimeout(() => {
    res.json(getProductByID(req.params.id));
  }, 2000);
});

module.exports = router;
