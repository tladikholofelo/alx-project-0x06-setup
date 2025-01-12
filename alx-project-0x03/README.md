# Splash App

## Overview

Splash App is a Next.js application that demonstrates common web app patterns, including layout reuse, imperative routing, and custom error pages. The app uses Tailwind CSS for styling and integrates React Icons for iconography. It aims to provide a user-friendly interface with easy navigation for various AI-related tools.

## Features

- **Responsive layout**: The app features a header and footer layout that is consistent across pages.
- **Imperative routing**: Navigation is handled using imperative routing through `useRouter` from Next.js.
- **Custom 404 page**: A custom 404 error page is displayed when a non-existent route is accessed.
- **Button components**: Reusable button components with customizable styles and actions.
- **Google Fonts Integration**: The app uses the Montserrat font from Google Fonts.

## Installation

To get started with Splash App, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/tladikholofelo/alx-project-0x03-setup.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd alx-project-0x03-setup
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**: Visit http://localhost:3000 to see the app in action.

## Project Structure

```bash
   alx-project-0x03-setup/
├── components/
│   ├── common/
│   │   └── Button.tsx
│   ├── layouts/
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── Layout.tsx
├── interface/
│   └── index.ts
├── pages/
│   ├── 404.tsx
│   └── index.tsx
├── public/
├── styles/
│   └── global.css
└── package.json
```

## License

This project is licensed under the MIT License.
