# 📚 Bookstore Website

Welcome to the **Bookstore Website**, an e-commerce platform for browsing, searching, and purchasing books. This project is built with a modern web stack to deliver a seamless and responsive user experience.

## Table of Contents

- [Purpose](#-purpose)
- [Live Demo](#-live-demo)
- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Project Structure](#-project-structure)
- [Installation and Setup](#-installation-and-setup)
- [Contributing](#-contributing)
- [Contact](#-contact)

## 📌 Purpose

This frontend project aims to create a modern, user-friendly e-commerce platform for book enthusiasts. Key development objectives include:

- Implementing responsive design principles for optimal viewing across devices
- Creating an intuitive user interface for seamless book discovery and purchasing
- Practicing modern React development patterns and state management
- Demonstrating proficiency in frontend technologies and best practices
- Building a scalable and maintainable codebase using component-based architecture

## 📺 Live Demo

Experience the live application: [Bookstore Demo](https://gitbookeg.netlify.app/)

Backend API developed by [Alaa Eldeen](https://github.com/Alaa-Eldeen22) - [API Repository](https://github.com/Alaa-Eldeen22/bookstore-app)

## 🌟 Features

### User Features:

- **Browse Books**: Explore a variety of books by categories, authors, or featured collections.
- **Search**: Search books by name, author, or category.
- **User Authentication**: Register and log in to manage your orders and favorites.
- **Cart Management**: Add, remove, or update the quantity of books in your cart.
- **Checkout**: Securely checkout with payment options.
- **Book Reviews & Ratings**: Leave reviews and rate books.
- **Favorites**: Save books to your favorites list for later viewing.

### 💼 Admin Features:

- **Admin Dashboard**: Manage books, categories, and orders.
- **CRUD Operations**: Add, edit, delete, and view book details.
- **Order Management**: View and update order statuses.

---

## 🛠️ Technologies Used

### Core Technologies:

- React 18
- Redux Toolkit & RTK Query
- React Router v6
- Material-UI (MUI)
- Tailwind CSS
- Styled Components

## 📁 Project Structure

```plaintext
frontend/
├── public/              # Static files
├── src/
│   ├── assets/         # Images, fonts, and other static resources
│   ├── components/     # Reusable UI components
│   │   ├── common/    # Shared components (buttons, inputs, etc.)
│   │   ├── layout/    # Layout components (header, footer, etc.)
│   │   └── features/  # Feature-specific components
│   ├── pages/         # Page components
│   ├── hooks/         # Custom React hooks
│   ├── services/      # API services and external integrations
│   ├── store/         # Redux store configuration and slices
│   ├── styles/        # Global styles and theme configuration
│   ├── utils/         # Utility functions and helpers
│   ├── App.jsx        # Root component
│   └── main.jsx       # Entry point
├── tests/             # Test files
├── .eslintrc.js      # ESLint configuration
├── .prettierrc       # Prettier configuration
├── package.json      # Project dependencies and scripts
└── vite.config.js    # Vite configuration
```

## 🚀 Installation and Setup

### Prerequisites:

- **Node.js** (v16 or later)
- **MongoDB** (local or cloud-based)
- **Git**

### Steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Alaa-Eldeen22/bookstore-app.git
   cd bookstore
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the backend:

   - Navigate to the backend directory:
     ```bash
     cd Book-Store-BackEnd
     ```
   - Create a `.env` file and configure the environment variables:
     ```env
     PORT=3000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_secret_key
     ```
   - Start the server:
     ```bash
     npm start
     ```

4. Set up the frontend:

   - Navigate to the frontend directory:
     ```bash
     cd Book-Store-FrontEnd
     ```
   - Start the development server:
     ```bash
     npm start
     ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests.

---

## 📧 Contact

For any inquiries or feedback, please contact `Abdo2652149@gmail.com`.
