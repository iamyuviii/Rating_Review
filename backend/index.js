require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize, Product, Review } = require('./models');
const reviewRoutes = require('./routes/reviews');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', reviewRoutes);

sequelize.sync({ alter: true })
  .then(() => {
    console.log('DB synced');
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch(err => console.error('DB sync error:', err));
