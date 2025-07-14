# AdminHub - Modern Admin Panel

A beautiful, modern admin panel built with React, Node.js, and colorful UI components.

## 🎨 UI Features

### Colorful Design System

- **Primary Colors**: Sky blue gradients (#0ea5e9 to #0284c7)
- **Secondary Colors**: Purple/Magenta gradients (#d946ef to #c026d3)
- **Accent Colors**: Orange gradients (#f97316 to #ea580c)
- **Success Colors**: Green gradients (#10b981 to #059669)
- **Warning Colors**: Amber gradients (#f59e0b to #d97706)
- **Danger Colors**: Red gradients (#ef4444 to #dc2626)

### Modern Components

- ✨ Gradient buttons with hover effects
- 🎯 Glass-effect cards with backdrop blur
- 🌈 Animated loading spinners
- 📱 Responsive design for all devices
- 🎭 Smooth animations and transitions
- 🎪 Floating elements and hover effects

### Enhanced Layout

- **Header**: Modern gradient header with user menu and navigation
- **Footer**: Professional footer with links and social icons
- **Cards**: Glass-effect cards with hover animations
- **Buttons**: Gradient buttons with multiple variants
- **Forms**: Beautiful form inputs with icons and validation

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (for backend)

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd intern-exam01
```

2. Install backend dependencies

```bash
cd backend
npm install
```

3. Install frontend dependencies

```bash
cd frontend
npm install
```

4. Start the backend server

```bash
cd backend
npm start
```

5. Start the frontend development server

```bash
cd frontend
npm run dev
```

6. Open your browser and navigate to `http://localhost:3001`

## 🎭 UI Components

### Header

- Gradient background with primary, secondary, and accent colors
- User authentication menu with profile dropdown
- Responsive navigation with mobile menu
- Brand logo with icon

### Footer

- Dark gradient background
- Social media links
- Quick navigation links
- Company information

### Cards

- Glass-effect background with backdrop blur
- Hover animations with lift effect
- Rounded corners and shadows
- Gradient backgrounds available

### Buttons

- Multiple variants: primary, secondary, accent, success, danger, outline, ghost
- Gradient backgrounds with hover effects
- Icon support with Feather icons
- Loading states with spinners

### Forms

- Icon-enhanced input fields
- Password visibility toggle
- Validation error states
- Glass-effect backgrounds

## 🌈 Color Scheme

The application uses a vibrant color palette:

- **Primary**: Sky blue - represents trust and professionalism
- **Secondary**: Purple/Magenta - adds creativity and innovation
- **Accent**: Orange - brings energy and attention
- **Success**: Green - indicates positive actions
- **Warning**: Amber - highlights important information
- **Danger**: Red - shows critical alerts

## 📱 Responsive Design

The UI is fully responsive and works on:

- Desktop computers (1024px+)
- Tablets (768px - 1023px)
- Mobile phones (320px - 767px)

## 🎨 Animations

- Hover effects on cards and buttons
- Smooth transitions for all interactions
- Loading spinners with multiple variants
- Floating animations for decorative elements
- Scale and fade animations for modals

## 🛠️ Technologies

### Frontend

- React 18
- React Router DOM
- Tailwind CSS
- React Icons (Feather Icons)
- React Hot Toast
- Vite

### Backend

- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Bcrypt

## 📂 Project Structure

```
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Header.jsx
│   │   │   │   └── Footer.jsx
│   │   │   └── ui/
│   │   │       ├── Card.jsx
│   │   │       ├── Button.jsx
│   │   │       └── LoadingSpinner.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── Users.jsx
│   │   └── styles/
│   │       └── index.css
└── backend/
    ├── controllers/
    ├── models/
    ├── routes/
    └── middleware/
```

## 🎯 Features

- **User Management**: Complete CRUD operations for users
- **Role-based Access**: Admin and user roles with different permissions
- **Authentication**: JWT-based secure authentication
- **Modern UI**: Beautiful, colorful, and responsive design
- **Real-time Updates**: Live data updates and notifications
- **Search & Filter**: Advanced search functionality
- **Data Visualization**: Statistics and analytics cards

## 🔐 Authentication

- Secure JWT token-based authentication
- Role-based access control (Admin/User)
- Password encryption with bcrypt
- Session management

## 👥 User Roles

### Admin

- Full access to user management
- Can create, read, update, and delete users
- Can change user roles
- Access to all system features

### User

- Limited access to personal dashboard
- Can view own profile information
- Cannot modify other users

## 📊 Dashboard Features

- Welcome section with user information
- Statistics cards with colorful gradients
- Quick action buttons
- Recent activity timeline
- Account information display

## 🎮 Demo

Visit the application at `http://localhost:3001` and use these demo credentials:

**Admin Account:**

- Email: admin@demo.com
- Password: admin123

**User Account:**

- Email: user@demo.com
- Password: user123

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Support

For support, email your-email@example.com or create an issue in the repository.

---

Made with ❤️ by [Your Name]
