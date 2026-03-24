# Setup Guide - Combined Frontend + Backend

This setup runs **everything on ONE server** at `http://localhost:5000`

## Architecture

```
Browser Request → Express Server (Port 5000)
                      ↓
                  Is it /api/* ?
                      ↓
        YES ←──────────┴──────────→ NO
         ↓                          ↓
    API Handler              Serve React App
    (MongoDB)                (HTML/CSS/JS)
```

## Quick Start

### 1. Install Dependencies

```bash
cd contact-app

# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
cd ..
```

### 2. Configure Environment

Edit `contact-app/.env`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/contact-app
NODE_ENV=production
```

### 3. Start MongoDB

**Windows:**
```bash
net start MongoDB
```

**Mac/Linux:**
```bash
brew services start mongodb-community
# or
sudo systemctl start mongod
```

### 4. Build Frontend

```bash
npm run build
```

This builds the React app and puts it in the `public/` folder.

### 5. Start Server

```bash
npm start
```

Visit: `http://localhost:5000`

## How It Works

1. **Build Process**: `npm run build` compiles React → static files in `public/`
2. **Server Starts**: Express serves files from `public/` folder
3. **API Requests**: `/api/*` routes go to backend controllers
4. **Everything Else**: Serves the React app (index.html)

## Development Mode

For faster development with hot-reload:

**Terminal 1 - Backend:**
```bash
npm run dev
```

**Terminal 2 - Frontend:**
```bash
npm run client:dev
```

- Frontend: `http://localhost:3000` (with hot-reload)
- Backend: `http://localhost:5000`

## Testing

1. Visit `http://localhost:5000`
2. Fill out contact form
3. Check MongoDB:
```bash
mongosh
use contact-app
db.contacts.find()
```

## Deployment

For production deployment, you need:
- MongoDB Atlas (cloud database)
- Hosting service that supports Node.js (Heroku, Railway, Render)

See `DEPLOYMENT.md` for cloud deployment options.

## Troubleshooting

### "Cannot GET /"
- Run `npm run build` first
- Check if `public/` folder exists

### "MongoDB connection error"
- Ensure MongoDB is running
- Check connection string in `.env`

### Contact form not working
- Check browser console for errors
- Verify MongoDB is connected
- Check server logs

## File Structure

```
contact-app/
├── client/              # React source code
│   ├── src/
│   └── package.json
├── config/              # Database config
├── controllers/         # API logic
├── models/              # MongoDB schemas
├── routes/              # API routes
├── public/              # Built React app (generated)
├── server.js            # Express server
└── package.json         # Backend dependencies
```

## Summary

✅ **One command to run**: `npm start`
✅ **One port**: `5000`
✅ **One server**: Express handles everything
✅ **Database**: MongoDB stores contact messages
