# React Architecture Documentation

This document outlines the complete React project structure and best practices implemented in this application.

## Project Structure

```
src/
├── components/          # Reusable React components (.jsx)
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Layout.jsx
│   └── index.js        # Barrel export
├── pages/              # Page components (.jsx)
│   ├── Home.jsx
│   ├── Dashboard.jsx
│   ├── NotFound.jsx
│   └── index.js        # Barrel export
├── hooks/              # Custom React hooks (.js)
│   ├── useAuth.js
│   ├── useFetch.js
│   ├── useLocalStorage.js
│   └── index.js        # Barrel export
├── services/           # API and business logic (.js)
│   ├── authService.js
│   ├── apiService.js
│   ├── dataService.js
│   └── index.js        # Barrel export
├── utils/              # Utility functions (.js)
│   ├── stringUtils.js
│   ├── validationUtils.js
│   ├── formatUtils.js
│   └── index.js        # Barrel export
├── constants/          # Application constants (.js)
│   ├── api.js
│   ├── app.js
│   └── index.js        # Barrel export
├── styles/             # CSS files
│   ├── global.css
│   ├── components/
│   │   ├── header.css
│   │   ├── footer.css
│   │   └── layout.css
│   └── pages/
│       ├── home.css
│       ├── dashboard.css
│       └── not-found.css
├── App.jsx             # Main app component
└── ARCHITECTURE.md     # This file
```

## Folder Purpose

### Components (`src/components/`)
- Contains reusable React components
- All files use `.jsx` extension
- Each component is a separate file
- Components should be presentational and not contain business logic
- Use barrel export (`index.js`) for easy imports

**Example:**
```javascript
import { Header, Footer, Layout } from './components';
```

### Pages (`src/pages/`)
- Page-level components that represent routes
- All files use `.jsx` extension
- Should contain layout logic and pass props to presentational components
- One page per file

**Example:**
```javascript
import { Home, Dashboard } from './pages';
```

### Hooks (`src/hooks/`)
- Custom React hooks for state and side effects
- All files use `.js` extension
- Encapsulate reusable logic
- Naming convention: `use*` (e.g., `useAuth`, `useFetch`)

**Available Hooks:**
- `useAuth` - Authentication state and actions
- `useFetch` - Data fetching with loading and error states
- `useLocalStorage` - Persistent state in localStorage

**Example:**
```javascript
import { useAuth, useFetch } from './hooks';

const { user, login, logout } = useAuth();
const { data, isLoading, error } = useFetch('/api/users');
```

### Services (`src/services/`)
- API calls and business logic
- All files use `.js` extension
- Singleton instances for reusability
- Handle HTTP requests, authentication, and data operations

**Available Services:**
- `authService` - Authentication API calls
- `apiService` - Generic HTTP request handler
- `dataService` - CRUD operations

**Example:**
```javascript
import { authService, apiService, dataService } from './services';

await authService.login(email, password);
await apiService.get('/api/data');
await dataService.create('/items', newItem);
```

### Utils (`src/utils/`)
- Pure utility functions
- All files use `.js` extension
- No side effects or external dependencies
- Organized by functionality

**Available Utilities:**
- `stringUtils` - String manipulation (capitalize, truncate, etc.)
- `validationUtils` - Validation functions (email, password, etc.)
- `formatUtils` - Formatting functions (dates, currency, etc.)

**Example:**
```javascript
import { capitalize, formatDate, isValidEmail } from './utils';

const title = capitalize('hello');
const date = formatDate(new Date(), 'MM/DD/YYYY');
const valid = isValidEmail('test@example.com');
```

### Constants (`src/constants/`)
- Application constants and configuration
- All files use `.js` extension
- Centralized configuration management

**Available Constants:**
- `api.js` - API endpoints and configuration
- `app.js` - App constants, themes, status, messages

**Example:**
```javascript
import { API_ENDPOINTS, THEMES, ERROR_MESSAGES } from './constants';

const endpoint = API_ENDPOINTS.AUTH.LOGIN;
const theme = THEMES.LIGHT;
const error = ERROR_MESSAGES.NETWORK_ERROR;
```

### Styles (`src/styles/`)
- Global and component-specific CSS
- Organized by type (global, components, pages)
- Uses CSS variables for theming
- Responsive design with media queries

**File Organization:**
- `global.css` - Global styles and CSS variables
- `components/` - Component-specific styles
- `pages/` - Page-specific styles

## File Extensions

- **`.jsx`** - React components (visual UI)
  - Components in `src/components/`
  - Pages in `src/pages/`
  - Main `src/App.jsx`

- **`.js`** - JavaScript logic (non-visual)
  - Hooks in `src/hooks/`
  - Services in `src/services/`
  - Utils in `src/utils/`
  - Constants in `src/constants/`
  - CSS imports in components

## Naming Conventions

### Components
- PascalCase filenames: `Header.jsx`, `UserProfile.jsx`
- Component names match file names
- Descriptive names reflecting component purpose

### Hooks
- Prefix with `use`: `useAuth.js`, `useFetch.js`
- PascalCase exported function: `useAuth() {}`
- Named exports

### Services
- camelCase filenames: `authService.js`, `apiService.js`
- Suffixed with `Service`: `authService`, `dataService`
- Default export

### Utils
- camelCase filenames: `stringUtils.js`, `validationUtils.js`
- Grouped by functionality
- Named exports for individual functions

### Constants
- camelCase filenames: `api.js`, `app.js`
- UPPER_SNAKE_CASE for constant values
- Named exports

## Best Practices

### Component Organization
```javascript
// 1. Import statements
import React from 'react';
import { useAuth } from '../hooks';
import '../styles/components/myComponent.css';

// 2. Component definition
const MyComponent = ({ prop1, prop2 }) => {
  // 3. Hooks
  const { user } = useAuth();

  // 4. Event handlers
  const handleClick = () => {};

  // 5. Render
  return <div>Content</div>;
};

// 6. Export
export default MyComponent;
```

### Hook Usage
```javascript
// Hooks should encapsulate related logic
const useUserData = () => {
  const { user } = useAuth();
  const { data: userData } = useFetch(`/api/users/${user?.id}`);
  
  return { user, userData };
};
```

### Service Usage
```javascript
// Services handle API communication
const fetchUserData = async () => {
  try {
    const response = await apiService.get('/api/users');
    return response;
  } catch (error) {
    console.error('Failed to fetch users:', error);
    throw error;
  }
};
```

### CSS Organization
```css
/* Use CSS variables for theming */
.component {
  background-color: var(--surface);
  color: var(--text);
  padding: var(--spacing-md);
}

/* Use shorthand when possible */
.component {
  padding: 10px 20px; /* instead of padding-top, etc. */
  margin: 0 auto;
}

/* Organize with media queries */
@media (max-width: 768px) {
  .component {
    flex-direction: column;
  }
}
```

## Import Examples

### From Components
```javascript
import { Header, Footer, Layout } from './components';
// or
import Header from './components/Header';
```

### From Hooks
```javascript
import { useAuth, useFetch, useLocalStorage } from './hooks';
// or
import useAuth from './hooks/useAuth';
```

### From Services
```javascript
import { authService, apiService } from './services';
// or
import authService from './services/authService';
```

### From Utils
```javascript
import { capitalize, formatDate, isValidEmail } from './utils';
// or
import { capitalize } from './utils/stringUtils';
```

### From Constants
```javascript
import { API_ENDPOINTS, THEMES, ERROR_MESSAGES } from './constants';
// or
import { API_ENDPOINTS } from './constants/api';
```

## Common Patterns

### Fetching Data in a Component
```javascript
import { useFetch } from '../hooks';
import { dataService } from '../services';

const UserList = () => {
  const { data: users, isLoading, error } = useFetch('/api/users');

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {users?.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};
```

### Authentication Pattern
```javascript
import { useAuth } from '../hooks';

const LoginForm = () => {
  const { login, isLoading, error } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      // Redirect or update UI
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form inputs */}
    </form>
  );
};
```

### Form Validation Pattern
```javascript
import { isValidEmail, isValidPassword } from '../utils';

const validateForm = (data) => {
  const errors = {};

  if (!isValidEmail(data.email)) {
    errors.email = 'Invalid email';
  }

  if (!isValidPassword(data.password)) {
    errors.password = 'Password too weak';
  }

  return errors;
};
```

## Extending the Architecture

### Adding a New Component
1. Create file: `src/components/MyComponent.jsx`
2. Create styles: `src/styles/components/my-component.css`
3. Add to `src/components/index.js`

### Adding a New Hook
1. Create file: `src/hooks/useMyHook.js`
2. Add to `src/hooks/index.js`

### Adding a New Service
1. Create file: `src/services/myService.js`
2. Add to `src/services/index.js`

### Adding a New Util
1. Create file: `src/utils/myUtils.js`
2. Add exports to `src/utils/index.js`

### Adding a New Page
1. Create file: `src/pages/MyPage.jsx`
2. Create styles: `src/styles/pages/my-page.css`
3. Add to `src/pages/index.js`
4. Add route in `src/App.jsx`

## Summary

This architecture provides:
- **Clear separation of concerns** - Components, logic, services, utils separated
- **Reusability** - Custom hooks and services encapsulate logic
- **Scalability** - Easy to add new components, pages, and services
- **Maintainability** - Consistent naming and organization
- **Type Safety** - Clear file organization reduces bugs
- **Performance** - Service singletons and optimized re-renders
- **Styling** - Centralized CSS variables and responsive design

Follow these patterns to maintain consistency and code quality throughout the project.
