const { Product, Review } = require('../models');

const DUMMY_PRODUCTS = [
  { id: 1, name: 'Product A', description: 'Desc A' },
  { id: 2, name: 'Product B', description: 'Desc B' },
  { id: 3, name: 'Product C', description: 'Desc C' },
];

exports.listProducts = (req, res) => {
  res.json(DUMMY_PRODUCTS);
};

exports.getProductSummary = async (req, res) => {
  try {
    const prodId = req.params.id;
    const reviews = await Review.findAll({ where: { ProductId: prodId } });
    const avgRating = reviews.length
      ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
      : 0;
    res.json({ averageRating: avgRating, reviews });
  } catch (error) {
    console.error('Error getting product summary:', error);
    res.status(500).json({ message: "Failed to get product summary", error: error.message });
  }
};

exports.postReview = async (req, res) => {
  try {
    const prodId = req.params.id;
    const { rating, review, tags } = req.body;

    const userId = req.ip || req.connection.remoteAddress || 'unknown';

    const alreadyReviewed = await Review.findOne({
      where: { ProductId: prodId, userId },
    });

    if (alreadyReviewed) {
      return res.status(400).json({ 
        message: "You have already submitted a review for this product.",
        error: "DUPLICATE_REVIEW"
      });
    }

    if (!rating && !review) {
      return res.status(400).json({ 
        message: "Either rating or review (or both) must be provided.",
        error: "VALIDATION_ERROR"
      });
    }

    const saved = await Review.create({
      rating: rating || null,
      review: review || null,
      tags: tags || null,
      ProductId: prodId,
      userId,
    });
    
    res.status(201).json({
      message: "Review submitted successfully",
      review: saved
    });
  } catch (err) {
    console.error('Error posting review:', err);
    res.status(500).json({ 
      message: "Failed to submit review", 
      error: err.message 
    });
  }
};

