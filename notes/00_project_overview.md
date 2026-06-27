# CareerPilot AI — Project Overview

## What I am building

CareerPilot AI is a full-stack GenAI platform that helps users prepare job applications and interviews using their own career data.

Users will be able to upload or paste career documents, add job descriptions, receive AI job match analysis, generate tailored proposals, prepare interview questions, and chat with their career profile.

## Why I am building it

I am building this project to learn full-stack GenAI engineering from the basics:

- Backend APIs
- Frontend UI
- PostgreSQL database design
- Docker
- Testing
- Celery background jobs
- Redis
- Embeddings
- pgvector
- Semantic search
- RAG
- Structured outputs
- LangChain
- LangGraph
- AI evaluation
- Guardrails
- Deployment

## Learning rule

For every feature, I must understand:

1. What I built
2. Why I built it
3. How it works
4. How I tested it
5. How I would explain it in an interview

## Issue #1 Interview Questions

1. What is a monorepo?
2. Why are backend and frontend separated?
3. Why do we keep notes inside the repo?
4. Why do we use `.env.example`?
5. Why should `.env` never be committed?

## Issue #1 Interview Answers

### 1. What is a monorepo?
A monorepo is one GitHub repository that contains multiple parts of a project, such as backend, frontend, notes, Docker files, and documentation. CareerPilot AI is a monorepo because the backend, frontend, and learning notes are all inside one repository.

### 2. Why are backend and frontend separated?
Backend and frontend are separated because they have different responsibilities. The backend handles APIs, database, authentication, AI logic, Celery tasks, and business logic. The frontend handles the user interface, forms, pages, buttons, and displaying data to the user.

### 3. Why do we keep notes inside the repo?
We keep notes inside the repo so the project also shows my learning process. It helps me prepare for interviews because I can write what I built, why I built it, how it works, and how I tested it.

### 4. Why do we need `.env.example`?
`.env.example` shows which environment variables the project needs without exposing real secret values. It helps other developers understand how to configure the project safely.

### 5. Why should `.env` never be committed?
`.env` should never be committed because it can contain private secrets like database passwords, API keys, JWT secret keys, and production credentials. I commit `.env.example`, but I never commit the real `.env` file.