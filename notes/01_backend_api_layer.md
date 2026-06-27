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

## Interview Questions — Health Endpoint and Testing

### 1. What is FastAPI?

FastAPI is a modern Python framework used to build APIs. In this project, I use FastAPI to create backend endpoints such as `/health`.

### 2. What is an API endpoint?

An endpoint is a specific URL that a client can call to interact with the backend.

Example:

```text
GET /health
```

This endpoint returns:

```json
{"status": "ok"}
```

### 3. What is the purpose of a health endpoint?

A health endpoint checks whether the backend service is running. It is useful for development, Docker, deployment, monitoring, and CI/CD checks.

### 4. What does this code do?

```python
@app.get("/health")
async def health_check():
    return {"status": "ok"}
```

This creates a `GET /health` API endpoint. When someone visits `/health`, FastAPI runs the `health_check` function and returns a JSON response.

### 5. Why did we use `async def`?

`async def` creates an asynchronous function. It is useful when the backend needs to wait for I/O tasks like database queries, external API calls, file processing, or AI requests.

### 6. What is Uvicorn?

Uvicorn is an ASGI server that runs the FastAPI application.

We used this command:

```bash
uvicorn app.main:app --reload
```

### 7. What does `uvicorn app.main:app --reload` mean?

`app.main` means the `main.py` file inside the `app` folder.

The second `app` means the FastAPI object inside `main.py`.

`--reload` means the server restarts automatically when code changes.

### 8. What is Pytest?

Pytest is a Python testing framework. It runs test files and checks whether the code works as expected.

### 9. What is FastAPI TestClient?

FastAPI TestClient lets us test API endpoints without manually running the server in the browser. It sends fake requests to the FastAPI app during testing.

### 10. What does this test check?

```python
def test_health_endpoint_returns_ok():
    response = client.get("/health")

    assert response.status_code == 200
    assert response.json() == {"status": "ok"}
```

This test checks two things:

1. The `/health` endpoint returns HTTP status code `200`.
2. The response JSON is exactly `{"status": "ok"}`.

### 11. Why do we check status code `200`?

Status code `200` means the request was successful. If the endpoint is missing, broken, or crashes, the test will fail.

### 12. Why are automated tests important?

Automated tests help confirm that the backend still works after changes. They reduce bugs, protect existing features, and can later run automatically in GitHub Actions.

## 30-second interview answer

I created a FastAPI health endpoint and added an automated Pytest test for it. The endpoint returns a simple JSON response to confirm that the backend is running. I tested it using FastAPI TestClient, checking both the HTTP 200 status code and the exact JSON response. This helps make the backend more reliable and prepares the project for CI/CD.
