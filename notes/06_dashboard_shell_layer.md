# Dashboard Shell Layer — Issue #20

## What I Built

I updated the CareerPilot AI homepage into a basic dashboard shell.

The page now includes:

* CareerPilot AI branding
* A dashboard-style header
* Backend health status
* A hero section
* Placeholder feature cards

The placeholder cards are for:

* Career Documents
* Job Posts
* AI Analysis
* Interview Prep

## Why I Built It

Before this issue, the frontend only showed a simple backend health status card.

Now the frontend looks more like a real product dashboard. This gives the project a stronger full-stack portfolio feel and prepares the app for future pages and features.

CareerPilot AI will later need pages for uploading career documents, saving job posts, viewing AI analysis, and generating interview preparation.

## Key Concepts

### Dashboard Shell

A dashboard shell is the basic visual structure of an application page.

It usually includes:

* Header
* Main content area
* Cards or sections
* Navigation or status indicators

In this project, the dashboard shell gives CareerPilot AI a product-like frontend foundation.

### Feature Cards

Feature cards are reusable UI sections that represent important app features.

In this issue, I added placeholder cards for future modules:

```text
Career Documents
Job Posts
AI Analysis
Interview Prep
```

### Tailwind CSS

Tailwind CSS was used to style the page using utility classes.

Examples:

```tsx
bg-slate-950
text-white
rounded-2xl
border
p-6
grid
```

These classes control color, spacing, borders, layout, and typography.

### Reusable Data Mapping

I stored feature card content in an array:

```tsx
const featureCards = [
  {
    title: "Career Documents",
    description: "Upload or save CV, skills, portfolio, and LinkedIn details.",
  },
  {
    title: "Job Posts",
    description: "Paste job descriptions and track opportunities.",
  },
];
```

Then I used `.map()` to display each card.

This is better than hardcoding every card separately because it keeps the code cleaner and easier to extend.

### Conditional Styling

The backend status badge changes style depending on the backend status.

Example statuses:

```text
loading
ok
offline
```

This helps the UI visually show whether the backend is connected.

## Full-Stack Flow Kept

The dashboard still keeps the full-stack health check:

```text
Next.js frontend
→ fetch request
→ FastAPI /health endpoint
→ JSON response
→ React state update
→ Dashboard displays backend status
```

So the dashboard is not only static UI. It still connects to the backend.

## Testing

I tested the dashboard manually by running the backend:

```bash
cd backend
source .venv/bin/activate
uvicorn app.main:app --reload
```

Then I ran the frontend:

```bash
cd frontend
npm run dev
```

I opened:

```text
http://localhost:3000
```

Expected result:

```text
Dashboard page loads
Backend status shows ok
Feature cards appear
```

I also ran:

```bash
npm run build
```

The frontend production build passed successfully.

## Files Changed

```text
frontend/app/page.tsx
```

## Interview Questions

### 1. What is a dashboard shell?

A dashboard shell is the basic layout structure of an application page. It usually includes a header, main content area, status indicators, and cards or sections for key features.

### 2. Why did you create a dashboard shell?

I created a dashboard shell so the frontend looks more like a real product and can later support features like career documents, job posts, AI analysis, and interview preparation.

### 3. What frontend framework did you use?

I used Next.js with React, TypeScript, Tailwind CSS, and App Router.

### 4. What is Tailwind CSS?

Tailwind CSS is a utility-first CSS framework that lets me style UI elements using class names directly in the JSX.

### 5. What are feature cards?

Feature cards are small UI sections that represent important features of the application. In this project, I added cards for Career Documents, Job Posts, AI Analysis, and Interview Prep.

### 6. Why did you use an array for feature cards?

I used an array so the card content is stored in one clean data structure. Then I used `.map()` to render the cards. This makes the code easier to maintain and extend.

### 7. What does `.map()` do in React?

`.map()` loops over an array and returns UI for each item. In this project, I used it to create one card for each feature.

### 8. Did the dashboard still connect to the backend?

Yes. The dashboard still calls the FastAPI `/health` endpoint and displays the backend status.

### 9. How did you test the dashboard?

I ran the backend and frontend locally, opened the frontend in the browser, confirmed the dashboard loaded, confirmed the backend status displayed correctly, and ran `npm run build`.

### 10. Why run `npm run build`?

`npm run build` confirms that the frontend can compile successfully for production. It catches build-time errors before deployment.

## 30-Second Interview Answer

I created a basic dashboard shell for CareerPilot AI using Next.js and Tailwind CSS. The dashboard includes branding, a backend health status indicator, a hero section, and placeholder cards for future features like Career Documents, Job Posts, AI Analysis, and Interview Prep. I kept the existing frontend-to-backend health check, so the dashboard still communicates with the FastAPI backend. I tested it locally and confirmed the frontend production build passes.
