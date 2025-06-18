# 🛍️ Ratings & Review System

A full-stack application for product ratings and reviews with real-time average rating updates and review listings.

---

## 📁 Project Structure

```
.
├── backend/        # Express.js server with Sequelize and MySQL
├── frontend/       # React UI for submitting and viewing reviews
└── README.md       # Project documentation
```

---

## 🚀 Features

- REST API to post and fetch product reviews.
- Live average rating per product.
- Prevent multiple reviews by the same user.
- Tag support for reviews.
- Sequelize ORM and MySQL database.
- Fully responsive frontend in React.

---

## ⚙️ Setup Instructions

### 🔧 Prerequisites

- Node.js (>= 18)
- MySQL
- Git

---

### 📦 Backend Setup (`/backend`)

```bash
cd backend
npm install

# Create a `.env` file with the following content:
DB_NAME=your_db
DB_USER=root
DB_PASS=your_password
DB_HOST=localhost
PORT=4000

# Run database setup
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all

# Start the backend server
npm start
```

#### 🗃️ SQL Schema (MySQL)

```sql
CREATE TABLE Products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  description TEXT,
  averageRating FLOAT DEFAULT 0,
  createdAt DATETIME NOT NULL,
  updatedAt DATETIME NOT NULL
);

CREATE TABLE Reviews (
  id INT AUTO_INCREMENT PRIMARY KEY,
  rating INT NOT NULL,
  review TEXT,
  tags JSON,
  userId VARCHAR(255) NOT NULL,
  ProductId INT,
  createdAt DATETIME NOT NULL,
  updatedAt DATETIME NOT NULL,
  FOREIGN KEY (ProductId) REFERENCES Products(id)
);
```

---

### 💻 Frontend Setup (`/frontend`)

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📫 API Endpoints

### `GET /api/products`
- Fetch all products with their reviews and average rating.

### `POST /api/products/:id/reviews`
- Submit a new review for a product.

**Sample Request Body:**
```json
{
  "rating": 5,
  "review": "Excellent product!",
  "tags": ["durable", "eco-friendly"]
}
```

---

## 🧪 Testing Checklist

- ✅ Review submission from frontend
- ✅ Review visible below product
- ✅ Average rating updates live
- ✅ Duplicate reviews are prevented

---

## 💡 Author

Built with ❤️ for Fitpage Assignment by Razor.
