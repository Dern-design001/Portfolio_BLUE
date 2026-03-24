# Deployment Guide

## 1. EmailJS Setup (For Contact Form)

### Step 1: Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

### Step 2: Add Email Service
1. Go to **Email Services** in dashboard
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred email provider)
4. Connect your email: `michellesusan704@gmail.com`
5. Copy the **Service ID**

### Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template:

```
Subject: New Contact Form Message from {{from_email}}

From: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Copy the **Template ID**

### Step 4: Get Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key**

### Step 5: Configure Environment Variables
Create `contact-app/client/.env`:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## 2. GitHub Setup

### Initialize Git Repository
```bash
cd contact-app
git init
git add .
git commit -m "Initial commit: Portfolio contact app"
```

### Create GitHub Repository
1. Go to [GitHub](https://github.com)
2. Click **New Repository**
3. Name it: `portfolio-contact-app`
4. Don't initialize with README (we already have files)
5. Click **Create Repository**

### Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio-contact-app.git
git branch -M main
git push -u origin main
```

## 3. Vercel Deployment

### Option A: Deploy via Vercel Dashboard
1. Go to [Vercel](https://vercel.com)
2. Sign in with GitHub
3. Click **Add New** → **Project**
4. Import your `portfolio-contact-app` repository
5. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `public`
6. Add Environment Variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
7. Click **Deploy**

### Option B: Deploy via Vercel CLI
```bash
npm install -g vercel
cd contact-app
vercel
```

Follow the prompts and add environment variables when asked.

## 4. Firebase Setup (Optional - For Database)

If you want to store contact messages in Firebase instead of MongoDB:

### Step 1: Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **Add Project**
3. Name it: `portfolio-contact`
4. Disable Google Analytics (optional)

### Step 2: Enable Firestore
1. Go to **Firestore Database**
2. Click **Create Database**
3. Start in **Production Mode**
4. Choose location closest to you

### Step 3: Get Firebase Config
1. Go to **Project Settings** → **General**
2. Scroll to **Your Apps**
3. Click **Web** icon (</>)
4. Register app: `portfolio-contact-app`
5. Copy the Firebase config

### Step 4: Add Firebase to Project
```bash
cd client
npm install firebase
```

Create `client/src/services/firebase.js`:
```javascript
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

Add to `.env`:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## 5. Testing

### Local Testing
```bash
cd contact-app
npm run client:install
npm run build
npm start
```

Visit `http://localhost:5000` and test the contact form.

### Production Testing
After deployment, visit your Vercel URL and test the contact form.
Check your email (`michellesusan704@gmail.com`) for the message.

## 6. Custom Domain (Optional)

### On Vercel:
1. Go to your project settings
2. Click **Domains**
3. Add your custom domain
4. Follow DNS configuration instructions

## Troubleshooting

### EmailJS not working:
- Check environment variables are set correctly
- Verify EmailJS service is connected
- Check browser console for errors
- Ensure you're not exceeding free tier limits (200 emails/month)

### Vercel build fails:
- Check build logs
- Verify all dependencies are in package.json
- Ensure environment variables are set in Vercel dashboard

### Contact form not submitting:
- Open browser DevTools → Console
- Check for CORS errors
- Verify EmailJS credentials

## Support

For issues:
- EmailJS: https://www.emailjs.com/docs/
- Vercel: https://vercel.com/docs
- Firebase: https://firebase.google.com/docs
