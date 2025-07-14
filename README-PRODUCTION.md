# Role-Based Admin Panel - MERN Stack

A production-level role-based admin panel built with the MERN stack, featuring complete user authentication, role-based routing, and comprehensive user management capabilities.

## 🚀 Features

### Authentication & Authorization

- **JWT Authentication** - Secure token-based authentication
- **Role-based Access Control** - Admin and User roles with different permissions
- **Protected Routes** - Frontend and backend route protection
- **Persistent Sessions** - Remember user sessions across browser refreshes

### Admin Panel Features

- **User Management** - Create, read, update, delete users
- **Role Management** - Assign and modify user roles
- **Dashboard Analytics** - User statistics and system metrics
- **Real-time Notifications** - Toast notifications for user actions
- **Responsive Design** - Mobile-first responsive interface

### Technical Features

- **Redux State Management** - Centralized state management with Redux Toolkit
- **SEO Optimized** - Meta tags, structured data, and semantic HTML
- **Modern UI/UX** - Beautiful interface with Tailwind CSS
- **Type Safety** - PropTypes validation for components
- **Performance Optimized** - Code splitting and lazy loading
- **Security Best Practices** - Input validation, CSRF protection

## 🛠 Tech Stack

### Frontend

- **React 18** - Latest React with hooks and concurrent features
- **Redux Toolkit** - Modern Redux state management
- **React Router v6** - Client-side routing with nested routes
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **React Helmet Async** - SEO meta tag management
- **Lucide React** - Beautiful SVG icons
- **React Hot Toast** - Elegant notifications

### Backend (assumed structure)

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing

## 📁 Project Structure

```
frontend/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Layout.jsx
│   │   │   └── PrivateRoute.jsx
│   │   ├── SEO/
│   │   │   └── SEOHead.jsx
│   │   └── LoadingSpinner.jsx
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │   └── Users.jsx
│   ├── store/
│   │   ├── index.js
│   │   └── slices/
│   │       ├── authSlice.js
│   │       └── usersSlice.js
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB (for backend)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd intern-exam01
   ```

2. **Install Frontend Dependencies**

   ```bash
   cd frontend
   npm install
   ```

3. **Install Backend Dependencies**

   ```bash
   cd ../backend
   npm install
   ```

4. **Environment Setup**

   Create `.env` file in backend directory:

   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/admin-panel
   JWT_SECRET=your-super-secret-jwt-key
   JWT_EXPIRE=30d
   ```

5. **Start the Development Servers**

   Backend:

   ```bash
   cd backend
   npm run dev
   ```

   Frontend:

   ```bash
   cd frontend
   npm run dev
   ```

6. **Access the Application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## 👥 Default Users

The application comes with demo credentials:

### Admin Account

- **Email:** admin@example.com
- **Password:** admin123
- **Permissions:** Full system access, user management

### Regular User Account

- **Email:** user@example.com
- **Password:** user123
- **Permissions:** Limited dashboard access

## 📱 Features Walkthrough

### Authentication Flow

1. **Login/Register** - Users can create accounts or sign in
2. **JWT Token** - Secure tokens stored in localStorage
3. **Role Verification** - Server validates user roles on each request
4. **Auto Logout** - Expired tokens automatically log users out

### Admin Dashboard

- **User Statistics** - Total users, admin count, active users
- **Recent Activity** - Latest user registrations and activities
- **System Status** - API, database, and service health checks
- **Quick Actions** - Direct links to user management

### User Management

- **User List** - Paginated table with search and filtering
- **Create Users** - Add new users with role assignment
- **Edit Users** - Update user information and roles
- **Delete Users** - Remove users with confirmation dialogs

### Responsive Design

- **Mobile First** - Optimized for mobile devices
- **Tablet Support** - Perfect layout for tablets
- **Desktop Enhanced** - Full features on desktop screens

## 🔒 Security Features

### Frontend Security

- **Protected Routes** - Role-based route access control
- **Input Validation** - Client-side form validation
- **XSS Prevention** - Sanitized user inputs
- **CSRF Protection** - Token-based request validation

### Backend Security (Expected)

- **Password Hashing** - bcrypt with salt rounds
- **JWT Tokens** - Signed and expiring tokens
- **Rate Limiting** - API request rate limiting
- **CORS Configuration** - Cross-origin request handling
- **Input Sanitization** - Server-side validation

## 🎨 UI/UX Features

### Design System

- **Consistent Colors** - Primary blue and accent purple
- **Typography** - Readable font hierarchy
- **Spacing** - Consistent spacing scale
- **Shadows** - Subtle depth and elevation
- **Animations** - Smooth transitions and micro-interactions

### Accessibility

- **Semantic HTML** - Proper HTML structure
- **ARIA Labels** - Screen reader support
- **Keyboard Navigation** - Full keyboard accessibility
- **Color Contrast** - WCAG compliant color ratios

## 📊 Performance Optimizations

### Frontend Optimizations

- **Code Splitting** - Dynamic imports for route-based splitting
- **Image Optimization** - WebP format with fallbacks
- **Bundle Analysis** - Webpack bundle analyzer
- **Caching Strategy** - Service worker for offline support

### Backend Optimizations (Expected)

- **Database Indexing** - Optimized MongoDB queries
- **Response Compression** - Gzip compression
- **Connection Pooling** - Efficient database connections
- **Caching Layer** - Redis for session storage

## 🔧 Development

### Available Scripts

Frontend:

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

Backend:

```bash
npm run dev          # Start development server with nodemon
npm run start        # Start production server
npm run test         # Run tests
```

### Code Quality

- **ESLint** - JavaScript/React linting
- **Prettier** - Code formatting
- **Husky** - Pre-commit hooks
- **PropTypes** - Runtime type checking

## 🚀 Deployment

### Frontend Deployment (Vercel)

1. Connect GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Add environment variables if needed
4. Deploy with automatic CI/CD

### Backend Deployment (Railway)

1. Connect GitHub repository to Railway
2. Configure environment variables
3. Railway automatically detects Node.js and deploys
4. Database can be hosted on MongoDB Atlas

### Environment Variables

Production Frontend (.env.production):

```env
VITE_API_URL=https://your-backend-url.railway.app
```

Production Backend (.env.production):

```env
NODE_ENV=production
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
JWT_SECRET=your-production-jwt-secret
FRONTEND_URL=https://your-frontend-url.vercel.app
```

## 📝 API Documentation

### Authentication Endpoints

```
POST /api/v1/auth/register  # Register new user
POST /api/v1/auth/login     # Login user
GET  /api/v1/auth/me        # Get current user
POST /api/v1/auth/logout    # Logout user
```

### User Management Endpoints

```
GET    /api/v1/users        # Get all users (Admin only)
POST   /api/v1/users        # Create user (Admin only)
GET    /api/v1/users/:id    # Get user by ID
PUT    /api/v1/users/:id    # Update user (Admin only)
DELETE /api/v1/users/:id    # Delete user (Admin only)
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Redux Toolkit for simplified state management
- Lucide for beautiful icons
- Vercel and Railway for hosting platforms

## 📞 Support

For support, email [your-email@example.com] or create an issue in the GitHub repository.

---

**Built with ❤️ using the MERN Stack**
