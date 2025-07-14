# Production Environment Variables

# Frontend (.env.production)

VITE_API_URL=https://your-backend-url.railway.app/api/v1

# Backend (.env.production)

NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/admin_panel
JWT_SECRET=your-super-secure-production-jwt-secret-key-here
JWT_EXPIRE=30d
FRONTEND_URL=https://your-frontend-url.vercel.app

# Deployment Instructions

## Frontend Deployment (Vercel)

1. Connect your GitHub repository to Vercel
2. Set the following build settings:
   - Framework Preset: Vite
   - Build Command: npm run build
   - Output Directory: dist
   - Install Command: npm install
3. Add environment variables in Vercel dashboard:
   - VITE_API_URL: https://your-backend-url.railway.app/api/v1
4. Deploy automatically on each push to main branch

## Backend Deployment (Railway)

1. Connect your GitHub repository to Railway
2. Set the following environment variables:
   - NODE_ENV: production
   - MONGODB_URI: (your MongoDB Atlas connection string)
   - JWT_SECRET: (generate a secure secret)
   - JWT_EXPIRE: 30d
   - FRONTEND_URL: https://your-frontend-url.vercel.app
3. Railway will automatically detect package.json and deploy

## Database Setup (MongoDB Atlas)

1. Create a new cluster on MongoDB Atlas
2. Create a database user with read/write permissions
3. Whitelist your application's IP addresses
4. Get the connection string and update MONGODB_URI

## Domain Setup (Optional)

1. Configure custom domains in Vercel and Railway
2. Update CORS settings in backend
3. Update environment variables with new URLs
4. Test all functionality with production URLs

## Post-Deployment Checklist

- [ ] Frontend loads correctly
- [ ] API endpoints are accessible
- [ ] Authentication works
- [ ] User registration works
- [ ] Admin panel functions work
- [ ] Database operations work
- [ ] All environment variables are set
- [ ] HTTPS is enabled
- [ ] Error logging is configured
