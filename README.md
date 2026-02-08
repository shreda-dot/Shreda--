# Shreda--
# Shreda Portfolio

This is a personal portfolio website for **Shreda**, a Front-End Engineer based in Lagos, Nigeria. The website showcases Shreda's experience, projects, and skills in a modern, responsive, and interactive design.

---

## Features

### 1. **Hero Section**
- Professional introduction with name, title, and years of experience.
- Profile picture displayed in a modern animated container.
- Smooth entry animations using **Framer Motion**.
- Action buttons: `View Projects` & `Contact Me` with smooth scroll functionality.

### 2. **Experience Section**
- Lists previous companies and roles with time periods.
- Descriptions highlight achievements in a professional tone.
- Animated appearance on scroll for a dynamic feel.

### 3. **Projects Section**
- Showcases completed projects with title, description, technologies used, and links.
- Projects are displayed with modern MUI styling, compatible with theme colors.
- Example project: **DX Innovation App** – a scalable landing page built with React, TypeScript, and Recharts.

### 4. **Contact Section**
- Contact form integrated with **Formspree** for submissions.
- Shows success message on submission, then resets form for further messages.
- Buttons scroll smoothly to this section from the navbar.

### 5. **Navbar**
- Desktop: Horizontal menu with smooth scroll to sections.
- Mobile: **Custom bottom-sheet menu** using **Framer Motion**:
  - Slides up from bottom with spring animation.
  - Overlay fades in for focus.
  - Nav items animate in with fade + scale.
- Logo is clickable, acts as a “Home” button.
- Fully responsive design.

### 6. **Smooth Scrolling**
- All navbar links scroll smoothly to corresponding sections using `scrollIntoView`.

### 7. **Theme**
- Dark mode with teal/cyan accent colors.
- Modern typography (`Inter` font family).
- Rounded borders and subtle shadows to maintain a professional look.

---

## Tech Stack
- **React** (with TypeScript)
- **Material-UI (MUI)** for components and styling
- **Framer Motion** for animations
- **Formspree** for contact form backend
- Responsive design for mobile, tablet, and desktop

---

## Project Structure


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
