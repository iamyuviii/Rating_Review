const express = require('express');
const router = express.Router();
const { validateReview } = require('../middlewares/validation');
const {
  listProducts,
  getProductSummary,
  postReview
} = require('../controllers/reviewController');

router.get('/products', listProducts);

router.get('/products/:id/summary', getProductSummary);

router.post('/products/:id/reviews', validateReview, postReview);

module.exports = router;
