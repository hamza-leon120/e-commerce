# 🛒 E-Commerce Store

> A fully functional e-commerce shopping cart application built with React. Browse products, view details, manage your cart with quantity controls, and see a live order summary — all powered by a real REST API.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue?style=for-the-badge)](https://hamza-leon120.github.io/e-commerce/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/hamza-leon120/e-commerce)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)

---

## 🚀 Live Demo

👉 [https://hamza-leon120.github.io/e-commerce/](https://hamza-leon120.github.io/e-commerce/)

---

## ✨ Features

- 🛍️ Browse all products fetched from a live REST API
- 🔍 Click any product to view full details (title, description, category, rating, price)
- ⭐ Visual star rating based on real product rating data
- 🛒 Add products to cart from both the product grid and product detail page
- ➕➖ Increase or decrease quantity directly in the cart
- 🗑️ Remove items from cart with one click
- 💰 Live order summary with subtotal, delivery fee, and total
- 📱 Fully responsive — works on mobile, tablet, and desktop
- 🔗 Multi-page navigation with React Router

---

## 🛠️ Built With

| Technology | Purpose |
|------------|---------|
| **React** | UI framework |
| **React Router DOM** | Client-side routing & navigation |
| **JavaScript (ES6+)** | Application logic & state management |
| **SCSS** | Styling & responsive layout |
| **FakeStore API** | Product data source |
| **Font Awesome** | Icons (cart, stars, trash, arrow) |
| **GitHub Pages** | Hosting & deployment |

---

## 📂 Project Structure

```
e-commerce/
├── public/
├── src/
│   ├── component/
│   │   ├── Header.js        # Navigation bar with cart icon
│   │   └── Product.js       # Single product detail page
│   ├── page/
│   │   ├── Products.js      # Product grid (home page)
│   │   └── Cart.js          # Shopping cart page
│   ├── scss/
│   │   └── style.css        # Compiled SCSS styles
│   ├── App.js               # Root component, state & routing
│   └── index.js             # App entry point
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed.

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/hamza-leon120/e-commerce.git

# 2. Navigate into the project folder
cd e-commerce

# 3. Install dependencies
npm install
```

### Running Locally

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode |
| `npm run build` | Builds the app for production |
| `npm run deploy` | Deploys to GitHub Pages |
| `npm test` | Launches the test runner |

---

## 🔌 API Used

This project uses the **[FakeStore API](https://fakestoreapi.com/)** — a free REST API that provides real e-commerce product data including titles, prices, images, categories, and ratings.

```
GET https://fakestoreapi.com/products
```

---

## 🔮 Future Improvements

- 🔐 User authentication (login / register)
- 🔎 Product search and category filter
- 💳 Payment integration
- 📦 Order history page
- 🌙 Dark mode support

---

## 👤 Author

**Aymen (Hamza)**

- 🐙 GitHub: [@hamza-leon120](https://github.com/hamza-leon120)
- 📧 Email: [haaymen20@gmail.com](mailto:haaymen20@gmail.com)
- 🌐 Portfolio: [hamza-leon120.github.io/my-profail](https://hamza-leon120.github.io/my-profail/)

---

## 📄 License

This project is open source and available for use and reference.

---

<p align="center">Made with ❤️ by <a href="https://github.com/hamza-leon120">Aymen</a></p>
