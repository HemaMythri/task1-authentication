# 🛒 E-Commerce Backend System

A full-featured **E-commerce Backend API** built using **Node.js, Express, and MongoDB**.
This project supports authentication, product management, cart functionality, and order processing.

---

## 🚀 Features

### 🔐 Authentication

* User Registration & Login
* JWT-based authentication
* Protected routes using middleware

### 📦 Product Management

* Create, Read, Update, Delete products
* Product details with name, price, description, image

### 🛒 Cart System

* Add products to cart
* View cart items
* Remove items from cart

### 📑 Order System

* Create order from cart (checkout)
* Auto-clear cart after order
* View user orders

### 🛠 Admin Feature

* Update order status (e.g., Pending → Shipped)

---

## 🛠 Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Authentication:** JSON Web Tokens (JWT)
* **API Testing:** Postman

---

## 📂 Project Structure

```
backend/
│── models/
│   ├── User.js
│   ├── Product.js
│   ├── Cart.js
│   ├── Order.js
│
│── routes/
│   ├── authRoutes.js
│   ├── productRoutes.js
│   ├── cartRoutes.js
│   ├── orderRoutes.js
│
│── middleware/
│   └── authMiddleware.js
│
│── server.js
│── package.json
```

---

## ⚙️ Installation

1. Clone the repository:

```
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

2. Navigate to project folder:

```
cd backend
```

3. Install dependencies:

```
npm install
```

4. Start the server:

```
node server.js
```

---

## 🔑 API Endpoints

### 🔐 Auth

* `POST /api/auth/register`
* `POST /api/auth/login`

### 📦 Products

* `GET /api/products`
* `POST /api/products`
* `PUT /api/products/:id`
* `DELETE /api/products/:id`

### 🛒 Cart

* `POST /api/cart`
* `GET /api/cart`
* `DELETE /api/cart/:productId`

### 📑 Orders

* `POST /api/orders` → Create order
* `GET /api/orders` → Get user orders
* `PUT /api/orders/:id` → Update order status

---

## 🧪 Testing

All APIs were tested using **Postman**.

---

## 🎯 Future Improvements

* 💳 Payment Integration (Stripe / Razorpay)
* ⭐ Product Reviews & Ratings
* 🔍 Search & Filter Products
* 🌐 Frontend (React) Integration

---

## 📌 Author

👤 Mythri Reddy

---

## ⭐ Acknowledgment

This project was built as part of an internship task to understand real-world backend development.

---
