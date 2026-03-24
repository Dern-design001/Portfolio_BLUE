# Michelle Susan Ezhilarasi - Portfolio Contact App

**Full-stack application with Frontend + Backend combined on ONE server**

## 🎯 Architecture

```
Single Express Server (Port 5000)
├── Serves React App (Frontend)
└── Handles API Requests (Backend + MongoDB)
```

## 🚀 Quick Start

### 1. Install All Dependencies
```bash
cd contact-app
npm install
npm run client:install
```

### 2. Start MongoDB
```bash
# Windows
net start MongoDB

# Mac/Linux
brew services start mongodb-community
```

### 3. Build & Run
```bash
npm run build
npm start
```

**Visit: `http://localhost:5000`**

## 📖 Detailed Setup

See `SETUP.md` for complete instructions.

## 🔧 Development Mode

Run frontend and backend separately for hot-reload:

**Terminal 1:**
```bash
npm run dev
```

**Terminal 2:**
```bash
npm run client:dev
```

- Frontend: `http://localhost:3000` (hot-reload)
- Backend: `http://localhost:5000`

## 📁 Project Structure

```
contact-app/
├── client/              # React frontend
│   ├── src/
│   │   ├── components/  # ContactForm
│   │   ├── pages/       # Home
│   │   ├── services/    # API calls
│   │   └── App.jsx
│   └── package.json
├── config/              # Database config
├── controllers/         # API handlers
├── models/              # MongoDB schemas
├── routes/              # API routes
├── public/              # Built React (generated)
├── server.js            # Express server
└── package.json         # Backend deps
```

## ✨ Features

- ✅ Combined frontend + backend on ONE server
- ✅ MongoDB database for storing messages
- ✅ RESTful API
- ✅ Modern React with Vite
- ✅ Bootstrap 5 responsive design
- ✅ Smooth animations

## 🛠️ Tech Stack

**Frontend:**
- React 18 + Vite
- Bootstrap 5
- Bootstrap Icons

**Backend:**
- Node.js + Express
- MongoDB + Mongoose
- CORS enabled

## 📡 API Endpoints

- `POST /api/contact/submit` - Submit contact form
- `GET /` - Serves React app

## 🌐 Deployment Options

### Option 1: EmailJS (No Backend Needed)
See `DEPLOYMENT.md` for Vercel deployment with EmailJS

### Option 2: Full Stack (With Backend)
Deploy to:
- Railway
- Render
- Heroku
- DigitalOcean

Requires MongoDB Atlas for cloud database.

## 📝 License

© 2026 Michelle Susan Ezhilarasi
