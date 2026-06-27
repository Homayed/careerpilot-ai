# Full-Stack Connection Layer — Issue #14 and Issue #16

## What I Built

I connected the Next.js frontend with the FastAPI backend.

The backend runs at:

```text
http://127.0.0.1:8000
```

The frontend runs at:

```text
http://localhost:3000
```

The frontend calls the backend `/health` endpoint and displays the backend status on the page.

The full-stack flow is:

```text
Next.js frontend
→ fetch request
→ FastAPI backend
→ /health endpoint
→ JSON response
→ frontend UI displays status
```

---

## Why I Built It

Before this sprint, the backend and frontend existed separately.

The backend had:

```text
GET /health
```

The frontend had a working Next.js page.

Now, the project has the first real full-stack connection. The frontend can call the backend and show live API status in the browser.

This is important because CareerPilot AI will later need the frontend to call backend endpoints for authentication, documents, job posts, AI analysis, proposal generation, and interview preparation.

---

## Backend URL and Frontend URL

The backend runs on:

```text
http://127.0.0.1:8000
```

The frontend runs on:

```text
http://localhost:3000
```

The frontend calls:

```text
http://127.0.0.1:8000/health
```

The backend returns:

```json
{
  "status": "ok"
}
```

Then the frontend displays:

```text
Backend status: ok
```

---

## Key Concepts

## CORS

CORS means:

```text
Cross-Origin Resource Sharing
```

CORS is a browser security mechanism.

It controls whether a frontend from one origin is allowed to call a backend from another origin.

In this project:

```text
Frontend origin: http://localhost:3000
Backend origin:  http://127.0.0.1:8000
```

Because they are different origins, the backend must allow the frontend origin.

---

## Origin

An origin is made of:

```text
protocol + host + port
```

Example:

```text
http://localhost:3000
```

Here:

```text
protocol = http
host = localhost
port = 3000
```

These two are different origins:

```text
http://localhost:3000
http://127.0.0.1:3000
```

Even though both point to the same local computer, browsers treat them as different origins.

---

## CORSMiddleware

FastAPI uses `CORSMiddleware` to allow browser requests from approved frontend origins.

In the backend, I allowed:

```text
http://localhost:3000
http://127.0.0.1:3000
```

This allows the local Next.js frontend to call the FastAPI backend during development.

---

## CORS Preflight Request

A CORS preflight request is a browser check.

Before sending some requests, the browser may send an `OPTIONS` request to ask:

```text
Backend, is this frontend origin allowed to call you?
```

In the test, I simulated this using:

```python
response = client.options(
    "/health",
    headers={
        "Origin": "http://localhost:3000",
        "Access-Control-Request-Method": "GET",
    },
)
```

Then I checked:

```python
assert response.headers["access-control-allow-origin"] == "http://localhost:3000"
```

This confirms that the backend allows the frontend origin.

---

## HTTP Headers

HTTP headers are metadata sent with requests and responses.

For CORS, the important response header is:

```text
access-control-allow-origin
```

If the backend returns:

```text
access-control-allow-origin: http://localhost:3000
```

then the browser knows that the frontend is allowed to access the backend response.

---

## Fetch

`fetch` is a browser API used to send HTTP requests from the frontend.

In this project, the frontend uses `fetch` to call:

```text
http://127.0.0.1:8000/health
```

Example:

```tsx
const response = await fetch("http://127.0.0.1:8000/health");
```

This sends a request from the Next.js frontend to the FastAPI backend.

---

## TypeScript

TypeScript is JavaScript with types.

In this issue, I used a type to describe the expected backend response:

```tsx
type HealthResponse = {
  status: string;
};
```

This means the backend response should contain a `status` field, and the value should be a string.

Example:

```json
{
  "status": "ok"
}
```

---

## React useState

`useState` stores values that can change on the frontend page.

In this project, I used state for:

```text
backend status
error message
```

Example:

```tsx
const [healthStatus, setHealthStatus] = useState<string>("loading");
const [error, setError] = useState<string>("");
```

At first:

```text
healthStatus = loading
error = empty string
```

If the backend works:

```text
healthStatus = ok
```

If the backend is not running:

```text
healthStatus = offline
error = Could not connect to backend
```

---

## React useEffect

`useEffect` runs code when the component loads.

In this project, I used `useEffect` to call the backend health endpoint when the frontend page opens.

Example:

```tsx
useEffect(() => {
  async function checkBackendHealth() {
    // call backend here
  }

  checkBackendHealth();
}, []);
```

The empty array:

```tsx
[]
```

means the effect runs once when the page loads.

---

## "use client"

In Next.js App Router, components are server components by default.

Because this page uses browser-side React hooks like:

```text
useState
useEffect
```

I added:

```tsx
"use client";
```

This tells Next.js that the component should run in the browser.

---

## Error Handling

I used `try/catch` to handle backend connection errors.

If the backend is running, the frontend shows:

```text
Backend status: ok
```

If the backend is stopped, the frontend shows:

```text
Backend status: offline
Could not connect to backend
```

This makes the UI more reliable because it does not silently fail.

---

## Final Frontend Logic

The frontend logic is:

```text
1. Page loads
2. healthStatus starts as "loading"
3. useEffect runs once
4. fetch calls http://127.0.0.1:8000/health
5. If backend responds successfully:
   - convert response to JSON
   - set healthStatus to "ok"
6. If backend fails:
   - set healthStatus to "offline"
   - show error message
```

---

## Manual Testing

I tested the backend first:

```bash
cd backend
source .venv/bin/activate
uvicorn app.main:app --reload
```

Then I opened:

```text
http://127.0.0.1:8000/health
```

Expected response:

```json
{
  "status": "ok"
}
```

Then I tested the frontend:

```bash
cd frontend
npm run dev
```

Then I opened:

```text
http://localhost:3000
```

Expected result:

```text
Backend status: ok
```

I also stopped the backend and refreshed the frontend.

Expected error result:

```text
Backend status: offline
Could not connect to backend
```

---

## Build Testing

I ran:

```bash
cd frontend
npm run build
```

The build passed successfully.

This confirms that the frontend compiles for production.

---

## Files Changed

Backend files:

```text
backend/app/main.py
backend/tests/test_health.py
```

Frontend file:

```text
frontend/app/page.tsx
```

---

## Interview Questions

### 1. What is CORS?

CORS means Cross-Origin Resource Sharing. It is a browser security mechanism that controls whether a frontend from one origin can call a backend from another origin.

---

### 2. Why did this project need CORS?

This project needed CORS because the frontend and backend run on different origins during local development.

The frontend runs on:

```text
http://localhost:3000
```

The backend runs on:

```text
http://127.0.0.1:8000
```

Since these are different origins, the backend must allow the frontend origin.

---

### 3. What is an origin?

An origin is the combination of protocol, host, and port.

Example:

```text
http://localhost:3000
```

In this example:

```text
protocol = http
host = localhost
port = 3000
```

---

### 4. What origins did you allow in the backend?

I allowed:

```text
http://localhost:3000
http://127.0.0.1:3000
```

These are local frontend origins for development.

---

### 5. Why did you allow `localhost:3000` instead of `8000`?

Because CORS checks who is calling the backend.

The backend runs on port `8000`, but the frontend runs on port `3000`.

So the backend must allow the frontend origin:

```text
http://localhost:3000
```

---

### 6. What is a CORS preflight request?

A CORS preflight request is an `OPTIONS` request sent by the browser before the real request. It checks whether the backend allows the frontend origin and requested method.

---

### 7. How did you test CORS?

I added an automated test that sends an `OPTIONS` request with an `Origin` header and checks that the backend returns:

```text
access-control-allow-origin: http://localhost:3000
```

I also manually tested CORS using `curl`.

---

### 8. What is `fetch`?

`fetch` is a browser API used to send HTTP requests from the frontend to a backend API.

In this project, I used `fetch` to call:

```text
http://127.0.0.1:8000/health
```

---

### 9. What does the frontend call?

The frontend calls:

```text
GET http://127.0.0.1:8000/health
```

---

### 10. What does the backend return?

The backend returns:

```json
{
  "status": "ok"
}
```

---

### 11. Why did you use `useEffect`?

I used `useEffect` to run the backend health check when the page first loads.

---

### 12. Why did you use `useState`?

I used `useState` to store the backend status and error message so the UI can update when the API response arrives.

---

### 13. Why did you add `"use client"`?

I added `"use client"` because the component uses browser-side React hooks like `useState` and `useEffect`.

Next.js App Router components are server components by default, so browser hooks require `"use client"`.

---

### 14. How did you handle backend errors?

I used `try/catch`.

If the backend request succeeds, the frontend displays:

```text
ok
```

If the backend request fails, the frontend displays:

```text
offline
Could not connect to backend
```

---

### 15. What is the difference between backend status loading, ok, and offline?

`loading` means the frontend has started checking the backend but has not received a response yet.

`ok` means the backend responded successfully.

`offline` means the frontend could not connect to the backend.

---

### 16. What is the full-stack flow you built?

The full-stack flow is:

```text
Next.js frontend
→ fetch request
→ FastAPI /health endpoint
→ JSON response
→ React state update
→ UI displays backend status
```

---

### 17. How did you manually test the full-stack connection?

I ran the backend on port `8000` and the frontend on port `3000`.

Then I opened the frontend in the browser and confirmed it displayed:

```text
Backend status: ok
```

Then I stopped the backend and confirmed the frontend displayed an offline error state.

---

### 18. Why did you run `npm run build`?

I ran `npm run build` to confirm that the frontend compiles successfully for production.

`npm run dev` confirms local development works, but `npm run build` confirms the app is ready to build for deployment.

---

## 30-Second Interview Answer

I connected the Next.js frontend to the FastAPI backend by adding CORS support and creating a frontend health check. The frontend calls the backend `/health` endpoint using `fetch`, stores the response in React state, and displays the backend status on the page. I also added loading, success, and error states, so the UI shows `ok` when the backend is running and an offline message when it cannot connect. I tested it manually in the browser, added CORS tests in the backend, and confirmed the frontend builds successfully.

---

## 1-Minute Interview Answer

In this sprint, I built the first real full-stack connection in CareerPilot AI. The FastAPI backend runs on port `8000`, and the Next.js frontend runs on port `3000`, so I added CORS middleware to allow the frontend origin to call the backend during local development. I also added a CORS test using FastAPI TestClient to confirm that the backend returns the correct `access-control-allow-origin` header.

On the frontend, I created a client-side Next.js page that calls the backend `/health` endpoint using `fetch`. I used `useState` to store the backend status and error message, and `useEffect` to run the health check when the page loads. When the backend responds, the UI shows `Backend status: ok`. If the backend is stopped, the UI shows an offline error message. This confirms that the frontend and backend are now connected.

---

## 3-Minute Interview Answer

CareerPilot AI is a full-stack GenAI project with a FastAPI backend and a Next.js frontend. In this sprint, I connected both layers for the first time.

The backend already had a `/health` endpoint that returns `{"status": "ok"}`. The frontend runs on `http://localhost:3000`, while the backend runs on `http://127.0.0.1:8000`. Since these are different origins, the browser would block frontend-to-backend requests unless the backend explicitly allows the frontend origin. To solve this, I added FastAPI `CORSMiddleware` and allowed local frontend origins such as `http://localhost:3000` and `http://127.0.0.1:3000`.

I also added an automated CORS test. The test sends a preflight `OPTIONS` request with an `Origin` header and checks that the backend response includes `access-control-allow-origin: http://localhost:3000`. This confirms that the browser would be allowed to make the actual request.

On the frontend, I updated the Next.js homepage to call the backend health endpoint using `fetch`. Because I used React hooks like `useState` and `useEffect`, I added `"use client"` at the top of the component. I used `useState` to store the backend status and any error message. I used `useEffect` so the health check runs automatically when the page loads.

If the backend responds successfully, the frontend displays `Backend status: ok`. If the backend is not running, the frontend catches the error and displays `Backend status: offline` with an error message. I tested both cases manually in the browser and also ran `npm run build` to confirm the frontend compiles successfully.

This sprint was important because it moved the project from separate backend and frontend setups to a real connected full-stack application.
