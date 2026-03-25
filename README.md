# Career Router - AI-Powered EdTech Platform

A modern, theme-switchable React application for career development, coding practice, course management, and interview preparation.

## Project Structure

```
career-router/
├── public/
│   └── index.html              # Minimal HTML entry point (no code)
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── ThemeToggle.jsx     # Theme switcher component
│   │   ├── Sidebar.jsx         # Navigation sidebar
│   │   ├── Topbar.jsx          # Top navigation bar
│   │   ├── ScoreRing.jsx       # Circular score display
│   │   ├── ProgressBar.jsx     # Progress indicator
│   │   ├── NotifToast.jsx      # Toast notifications
│   │   └── RoleSelectModal.jsx # Role selection modal
│   ├── pages/                  # Page components
│   │   ├── Login.jsx           # Login/Signup page
│   │   ├── Dashboard.jsx       # Main dashboard
│   │   ├── Problems.jsx        # Coding problems
│   │   ├── Courses.jsx         # Course listings
│   │   ├── Roadmap.jsx         # Learning roadmap
│   │   ├── Interviews.jsx      # Interview prep
│   │   ├── Jobs.jsx            # Job listings
│   │   ├── Resume.jsx          # Resume builder
│   │   └── AICoach.jsx         # AI chat coach
│   ├── data/                   # Data files
│   │   ├── problems.js         # Coding problems data
│   │   ├── courses.js          # Courses data
│   │   ├── jobs.js             # Jobs & interviews data
│   │   └── roadmap.js          # Roadmap & roles data
│   ├── hooks/                  # Custom React hooks
│   │   └── useTheme.js         # Theme management hook
│   ├── utils/                  # Utility functions
│   │   └── auth.js             # Authentication utilities
│   ├── styles/                 # Global styles
│   │   └── index.css           # All theme variables & base styles
│   ├── App.jsx                 # Main app component
│   └── index.js                # React entry point
├── package.json                # Dependencies & scripts
├── vite.config.js             # Vite build configuration
└── README.md                   # This file
```

## Features

### 🎨 Multi-Theme Support
- **Light** (Default) - Orange/white professional theme
- **Neon** - Vibrant dark theme with neon accents
- **Professional** - Clean blue professional theme
- **Clean** (LinkedIn style) - Minimal professional theme
- **Dark** (LeetCode style) - Orange dark theme

### 📊 Core Features
- **Dashboard** - Overview of progress and stats
- **Coding Problems** - LeetCode-style problems with difficulty levels
- **Courses** - Browse and track course progress
- **Learning Roadmap** - Track progress across 6 learning paths
- **Interview Prep** - Book mentoring sessions and prepare
- **Job Opportunities** - Find and apply for jobs
- **Resume Builder** - Create and preview resume
- **AI Coach** - Chat with AI for career guidance

### 🔐 Authentication
- Local storage-based authentication
- Sign up with email/password
- Role-based access (Student/Creator)
- JWT token system
- Persistent login state

## Getting Started

### Prerequisites
- Node.js 14+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Demo Credentials
```
Email: demo@example.com
Password: password123
```

## Component Structure

### App.jsx
Main application component that:
- Manages authentication state
- Routes between different pages
- Handles theme switching
- Manages notifications
- Provides role selection UI

### Pages
Each page is a self-contained component that:
- Imports data from the `data/` folder
- Uses reusable components from `components/`
- Maintains its own local state
- Communicates back to App via props

### Components
Reusable UI components that:
- Have no dependencies on page logic
- Accept data via props
- Support all 5 themes
- Include proper CSS classes

### Data
Static data files that:
- Export arrays of objects
- Follow consistent schemas
- Can be easily replaced with API calls
- Include meaningful sample data

## Styling

All styles are in `src/styles/index.css`:
- CSS custom properties for theming
- Class-based styling (no inline styles where possible)
- Responsive grid layouts
- Animations and transitions
- Theme-specific overrides

### CSS Custom Properties
```css
--bg, --surface, --surface2, --border
--accent, --accent2, --accent3, --accent4
--text, --text2, --text3
--shadow, --shadow-lg, --glow
--font-primary, --font-secondary, --font-mono
--radius-sm, --radius-md, --radius-lg
--spacing-sm, --spacing-md, --spacing-lg
```

## Theme Switching

Themes are switched by:
1. Adding/removing CSS classes on `document.body`
2. Saving preference to `localStorage`
3. Re-rendering with updated CSS variables

```javascript
// Switch theme
document.body.classList.add('theme-neon');
localStorage.setItem('vibe-theme', 'neon');
```

## Authentication Flow

1. User opens app → Check `localStorage` for auth token
2. If no token → Show Login page
3. User signs up/logs in → Generate JWT token
4. Store token in `localStorage`
5. Parse token to get user role and email
6. Show appropriate UI based on role

## Adding New Features

### New Page
1. Create file in `src/pages/MyPage.jsx`
2. Add route in `App.jsx`
3. Add navigation item in `Sidebar.jsx`

### New Component
1. Create file in `src/components/MyComponent.jsx`
2. Accept data via props
3. Use CSS classes (not inline styles)

### New Data
1. Create file in `src/data/mydata.js`
2. Export array of objects
3. Import in pages as needed

## Build & Deploy

```bash
# Build for production
npm run build

# Output goes to dist/ folder
# Deploy dist/ folder to hosting service
```

## Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool & dev server
- **CSS3** - Styling with custom properties
- **JavaScript ES6+** - Application logic

## License

MIT

## Author

Built with ❤️ for Career Router
