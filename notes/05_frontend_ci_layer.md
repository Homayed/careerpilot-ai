# Frontend CI Layer — Issue #18

## What I Built

I added a GitHub Actions workflow for the Next.js frontend.

The workflow file is:

```text
.github/workflows/frontend-build.yml
```

This workflow automatically runs the frontend production build when code is pushed or when a pull request is opened against `main`.

## Why I Built It

Before this issue, I could only test the frontend build manually using:

```bash
npm run build
```

Now GitHub automatically checks whether the frontend can build successfully before code is merged.

This makes the project more reliable because broken frontend code can be caught during pull requests.

## Key Concepts

### GitHub Actions

GitHub Actions is a CI/CD tool built into GitHub. It can automatically run commands when something happens in the repository, such as a push or pull request.

### Frontend CI

Frontend CI means automatically checking that the frontend installs dependencies and builds successfully.

### Node.js in CI

The GitHub Actions workflow sets up Node.js so the Next.js frontend can run inside GitHub’s temporary machine.

### npm ci

`npm ci` installs dependencies using `package-lock.json`.

It is better for CI than `npm install` because it installs exact locked versions and gives more consistent results.

### npm run build

`npm run build` creates an optimized production build of the Next.js frontend.

If the build fails, the pull request check fails.

## Workflow Steps

The frontend CI workflow does this:

```text
1. Checkout code
2. Set up Node.js
3. Install frontend dependencies using npm ci
4. Run npm run build
```

## Interview Questions

### 1. What is frontend CI?

Frontend CI means automatically checking that the frontend code can install dependencies and build successfully whenever changes are pushed or a pull request is opened.

### 2. Why did you add frontend CI?

I added frontend CI so that GitHub automatically verifies the Next.js frontend builds successfully before merging code into `main`.

### 3. What does `npm ci` do?

`npm ci` installs dependencies using the exact versions from `package-lock.json`. It is commonly used in CI because it gives clean and repeatable installs.

### 4. What does `npm run build` do?

`npm run build` creates an optimized production build of the Next.js application and checks whether the app can compile successfully.

### 5. Why run frontend build in GitHub Actions if it already works locally?

Local build proves it works on my machine. GitHub Actions proves it also works in a clean CI environment.

### 6. What checks should a pull request show now?

A pull request should show backend tests passing and frontend build passing.

## 30-Second Interview Answer

I added frontend CI using GitHub Actions so the Next.js app builds automatically on pushes and pull requests to `main`. The workflow sets up Node.js, installs dependencies with `npm ci`, and runs `npm run build` inside the `frontend` folder. This helps catch frontend build errors before code is merged.
