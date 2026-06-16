# 🏋️ FitSyncX - Gym Management System

FitSyncX is a full-stack Gym Management System designed to streamline gym operations through dedicated Admin and User dashboards. The platform enables membership management, trainer management, workout planning, user tracking, and secure authentication.

---

## 🚀 Features

### 👤 User Features

- Secure User Registration & Login
- JWT-based Authentication
- Manage Personal Profile
- Access Workout Schedules
- Track Gym Activities
- Receive Email Notifications

### 🛠️ Admin Features

- Admin Dashboard
- Manage Users
- Manage Trainers
- View System Statistics
- Monitor Gym Operations
- Secure Role-Based Access

---

## 🛠 Tech Stack

### Frontend

- React.js
- JavaScript (ES6+)
- CSS3
- Axios
- React Router DOM

### Backend

- Node.js
- Express.js
- JWT Authentication
- Nodemailer

### Database

- MySQL

### Deployment

- Vercel

---

## 📂 Project Structure

```bash
FitSyncX_New/
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── build/
│   └── package.json
│
├── Backend/
│   ├── config/
│   ├── controller/
│   ├── helper/
│   ├── routes/
│   ├── uploads/
│   ├── views/
│   ├── index.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Lakshay116/FitSyncX_New.git
cd FitSyncX_New
```

---

### Backend Setup

```bash
cd Backend
npm install
```

Create `.env`

```env
PORT=5000

DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=fitsyncx

JWT_SECRET=your_secret_key

EMAIL_USER=your_email
EMAIL_PASS=your_password
```

Run Backend

```bash
npm start
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## 🔄 System Workflow

1. User creates an account.
2. Authentication is performed using JWT.
3. Users access personalized dashboard features.
4. Admin manages users, trainers, and plans.
5. PostgreSQL stores all application data.
6. Email notifications are sent for important updates.
7. Role-based access ensures security.

---

## 🎯 Key Highlights

- Developed a full-stack Gym Management System from scratch.
- Implemented secure JWT-based authentication and authorization.
- Built Admin and User dashboards with role-based access control.
- Designed RESTful APIs using Node.js and Express.js.
- Integrated PostgreSQL for efficient data management.
- Implemented email notification functionality using Nodemailer.
- Followed MVC architecture for scalability and maintainability.

---

## 📈 Resume-Worthy Skills Demonstrated

- Full Stack Development
- React.js Development
- REST API Design
- MySQL Database Management
- Authentication & Authorization
- MVC Architecture
- Role-Based Access Control (RBAC)
- Email Service Integration
- Deployment & Production Readiness

---


## 👨‍💻 Author

### Lakshay Jangra

- GitHub: https://github.com/Lakshay116

---

⭐ If you found this project useful, consider giving it a star.
