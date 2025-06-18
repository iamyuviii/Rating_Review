cat <<'EOF' > README.md
# 🛍️ Ratings & Review System

A full-stack application for product ratings and reviews with real-time average rating updates and review listings.

## 📁 Project Structure


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

# Create a `.env` file with the following:
# DB_NAME=your_db
# DB_USER=root
# DB_PASS=your_password
# DB_HOST=localhost
# PORT=4000

# Initialize DB
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all

# Start server
npm start
