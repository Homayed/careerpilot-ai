# Frontend Layer — Issue #12

## What I built

I set up the frontend application for CareerPilot AI using Next.js.

The frontend is inside:

```text
frontend/
```

I confirmed that the app runs locally at:

```text
http://localhost:3000
```

I also ran a production build using:

```bash
npm run build
```

The build completed successfully.

## Why I built it

CareerPilot AI is a full-stack project, so it needs both a backend API and a frontend user interface.

The backend will handle API logic, database operations, authentication, and AI features.

The frontend will allow users to interact with the system through pages, forms, dashboards, and AI result screens.

## Key concepts

### Node.js

Node.js is a JavaScript runtime. It allows JavaScript and TypeScript tools to run outside the browser.

In this project, Node.js is needed to run the Next.js frontend.

### npm

npm is the Node package manager. It installs and manages frontend dependencies.

Examples:

```bash
npm install
npm run dev
npm run build
```

### Next.js

Next.js is a React framework used to build modern web applications.

In this project, I use Next.js for the frontend of CareerPilot AI.

### React

React is a JavaScript library for building user interfaces using reusable components.

Next.js is built on top of React.

### TypeScript

TypeScript is JavaScript with types. It helps catch mistakes earlier and makes code easier to maintain.

### Tailwind CSS

Tailwind CSS is a utility-first CSS framework. It helps build clean UI designs quickly using class names.

### ESLint

ESLint checks code quality and helps catch common mistakes.

### App Router

The App Router is Next.js’s modern routing system. It uses the `app/` folder to define pages and layouts.

### package.json

`package.json` stores project scripts and dependencies.

For example:

```json
"dev": "next dev"
"build": "next build"
```

### package-lock.json

`package-lock.json` locks the exact versions of installed packages. This helps keep installs consistent across machines.

### node_modules

`node_modules` contains installed frontend packages. It is not committed to GitHub because it can be regenerated using:

```bash
npm install
```

## Important commands

### Start frontend locally

```bash
cd frontend
npm run dev
```

### Open frontend

```text
http://localhost:3000
```

### Build frontend for production

```bash
npm run build
```

## Interview Questions

### 1. What is Next.js?

Next.js is a React framework used to build modern web applications. It provides routing, rendering, build tools, and production optimization.

### 2. Why are you using Next.js in this project?

I am using Next.js to build the frontend user interface for CareerPilot AI. The frontend will allow users to upload documents, paste job descriptions, view AI analysis, generate proposals, and interact with the backend API.

### 3. What is React?

React is a JavaScript library for building user interfaces using reusable components.

### 4. What is TypeScript?

TypeScript is a typed version of JavaScript. It helps catch errors earlier and makes the codebase easier to understand and maintain.

### 5. What is Tailwind CSS?

Tailwind CSS is a utility-first CSS framework that helps build UI quickly using predefined class names.

### 6. What is ESLint?

ESLint is a tool that checks code for mistakes, style problems, and possible bugs.

### 7. What is the App Router in Next.js?

The App Router is Next.js’s routing system that uses the `app/` directory to define pages, layouts, and routes.

### 8. What does `npm run dev` do?

`npm run dev` starts the frontend development server so I can view the app locally in the browser.

### 9. What does `npm run build` do?

`npm run build` creates an optimized production build of the frontend. It checks whether the app can compile successfully for deployment.

### 10. Why did you run `npm run build` after `npm run dev`?

`npm run dev` confirms the app runs locally during development. `npm run build` confirms the app can compile successfully for production.

### 11. What is the difference between backend and frontend?

The backend handles server-side logic, APIs, database operations, authentication, and AI processing.

The frontend is the user-facing interface that runs in the browser and communicates with the backend.

### 12. Why is the frontend inside a separate `frontend` folder?

This project uses a monorepo structure. The backend and frontend live in the same GitHub repository but remain organized in separate folders.

## 30-second interview answer

I set up the frontend layer of CareerPilot AI using Next.js with TypeScript, Tailwind CSS, ESLint, and App Router. I created the app inside the `frontend` folder as part of a monorepo structure. I tested it by running `npm run dev` and opening it at `localhost:3000`, then confirmed the frontend builds successfully using `npm run build`. This gives the project a proper full-stack foundation with a FastAPI backend and a Next.js frontend.
