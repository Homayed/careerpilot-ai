# Backend API Layer — Issue #4

## What I built

I created the first FastAPI backend endpoint for CareerPilot AI.

The endpoint is:

GET /health

It returns:

{"status": "ok"}

## Why I built it

The health endpoint confirms that the backend server is running. It will also be useful later for Docker, deployment, and monitoring.

## Key concepts

### FastAPI
FastAPI is a Python framework for building APIs.

### Endpoint
An endpoint is a URL that accepts a request and returns a response.

### async def
`async def` creates an asynchronous function. It is useful when the backend waits for I/O operations like database calls or external API calls.

### Uvicorn
Uvicorn is the ASGI server used to run the FastAPI app.

### Swagger
Swagger is the automatic API documentation page created by FastAPI.

## Interview answers

### 1. What is FastAPI?
FastAPI is a modern Python framework used to build APIs. In this project, I use it to create backend endpoints for health checks, documents, authentication, AI analysis, and other features.

### 2. What is an endpoint?
An endpoint is a specific URL in an API where a client can send a request. For example, `/health` is an endpoint that checks whether the backend is running.

### 3. What does async def mean?
`async def` means the function is asynchronous. It allows the backend to handle waiting tasks like database calls or external API calls more efficiently.

### 4. What is Uvicorn?
Uvicorn is an ASGI server that runs the FastAPI application locally or in production.

### 5. Why do we need a /health endpoint?
A `/health` endpoint is used to check whether the backend service is alive. It is useful for development, Docker, deployment platforms, and monitoring.
