# 🎯 Quizora — Full Stack Tech Quiz Platform

Quizora is a **modern full-stack web application** that allows users to test and improve their knowledge across multiple technologies through interactive quizzes, real-time feedback, and performance analytics.

It is designed with a **clean UI, scalable architecture, and responsive design**, making it suitable for both learning and assessment.

---

# 📌 Overview

Quizora provides an engaging platform where users can:

* Select a technology (HTML, CSS, JavaScript, React, etc.)
* Choose a difficulty level (Basic, Intermediate, Advanced)
* Attempt quizzes with instant feedback
* View their performance and results

---

# 🚀 Features

## 🧠 Quiz Engine

* Dynamic question loading
* Multiple technologies support
* Difficulty-based filtering
* Auto progression to next question
* Interactive answer selection

---

## 📊 Performance Analytics

* Score calculation (correct / incorrect)
* Percentage-based evaluation
* Performance categories:

  * 🟡 Outstanding
  * 🔵 Excellent
  * 🟢 Good Job
  * ⚪ Needs Improvement

---

## 🔐 Authentication System

* User registration and login
* JWT-based authentication
* Secure session handling

---

## 💾 Result Management

* Store quiz results in database
* Prevent duplicate submissions
* Retrieve user performance

---

## 📱 Responsive UI

* Sidebar navigation (desktop)
* Mobile-friendly layout
* Smooth transitions and animations

---

# 🛠️ Tech Stack

## Frontend

* React.js (Hooks)
* React Router DOM
* Axios
* Lucide React (Icons)
* Tailwind CSS / Custom Styling

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

## Tools

* Nodemon
* Vite
* Git & GitHub

---

# 🏗️ System Architecture

```
Frontend (React)
        ↓
REST API (Express)
        ↓
Database (MongoDB)
```

---

# 📂 Project Structure

```
Quizora/
│
├── backend/
│   ├── config/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── index.js
│
├── frontend/
│   ├── components/
│   ├── pages/
│   └── styles/
│
├── admin/
│
├── assets/
│   ├── dummydata.js
│   └── dummyStyles.js
│
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```
git clone https://github.com/chetankumar36/Quizora.git
cd Quizora
```

---

## 2️⃣ Backend Setup

```
cd backend
npm install
npm start
```

Server runs on:

```
http://localhost:4000
```

---

## 3️⃣ Frontend Setup

```
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 4️⃣ Admin Panel (Optional)

```
cd admin
npm install
npm run dev
```

---

# 🔐 Environment Variables

Create `.env` file inside backend:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=4000
```

---

# 📡 API Endpoints

## 🔑 Authentication

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register user |
| POST   | /api/auth/login    | Login user    |

---

## 📊 Results

| Method | Endpoint     | Description      |
| ------ | ------------ | ---------------- |
| POST   | /api/results | Save quiz result |
| GET    | /api/results | Get results      |

---

# ⚙️ Core Workflow

1. User selects a technology
2. Chooses difficulty level
3. Questions are loaded dynamically
4. User answers questions
5. Score is calculated
6. Results are displayed and saved

---

# 🧮 Score Calculation

```
percentage = (correct / total) * 100
```

---

# 🎨 UI Highlights

* Modern and clean interface
* Gradient-based design
* Interactive feedback icons
* Progress tracking bar
* Fully responsive layout

---

# 🚀 Future Enhancements

* ⏱️ Timer-based quizzes
* 🏆 Leaderboard system
* 📊 Advanced analytics dashboard
* 🌐 Deployment (Vercel / Render)
* 📱 Mobile app version

---

# 👨‍💻 Author

**Chetan Kumar**

* 💻 Full Stack Developer
* 📊 Aspiring Data Scientist
* 📍 India

---

# ⭐ Support

If you like this project:

* ⭐ Star the repository
* 🍴 Fork it
* 🛠️ Contribute

---

# 📜 License

This project is licensed under the MIT License.
