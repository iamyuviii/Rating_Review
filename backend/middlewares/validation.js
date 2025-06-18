exports.validateReview = (req, res, next) => {
  const { rating, review } = req.body;
  
  if (!rating && !review) {
    return res.status(400).json({ 
      error: 'Either rating or review (or both) must be provided.',
      message: 'Please provide at least a rating or a review.'
    });
  }
  
  if (rating !== undefined && rating !== null) {
    if (rating < 1 || rating > 5 || !Number.isInteger(Number(rating))) {
      return res.status(400).json({ 
        error: 'Rating must be an integer between 1 and 5.',
        message: 'Please provide a valid rating between 1 and 5.'
      });
    }
  }
  
  if (review !== undefined && review !== null && review.trim() === '') {
    return res.status(400).json({ 
      error: 'Review cannot be empty if provided.',
      message: 'Please provide a valid review text.'
    });
  }
  
  next();
};
