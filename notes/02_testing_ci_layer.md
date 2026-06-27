# Testing and CI Layer — Issue #10

## What I built

I added a GitHub Actions workflow that automatically runs backend tests whenever code is pushed or a pull request is opened against `main`.

The workflow file is:

```text
.github/workflows/backend-tests.yml
```

## Why I built it

Before this issue, tests only ran manually on my local machine.

Now, GitHub automatically runs the backend test suite in CI. This helps confirm that new code does not break the backend before it is merged.

## Key concepts

### GitHub Actions

GitHub Actions is a CI/CD tool built into GitHub. It can automatically run commands when something happens in the repository, such as a push or pull request.

### CI

CI means Continuous Integration. It means automatically checking that code works whenever changes are added to the project.

### Workflow

A workflow is a YAML file that tells GitHub Actions what to do.

In this project, the workflow installs Python dependencies and runs backend tests.

### Job

A job is a group of steps that runs on a GitHub-hosted machine.

In this project, the job is called `backend-tests`.

### Runner

A runner is the temporary machine GitHub uses to run the workflow.

In this project, I used:

```yaml
runs-on: ubuntu-latest
```

### Steps

Steps are the individual commands inside a job.

For this project, the steps are:

1. Checkout the code
2. Set up Python
3. Install dependencies
4. Run tests

## Interview Questions

### 1. What is GitHub Actions?

GitHub Actions is a tool that automates tasks in a GitHub repository. I used it to automatically run backend tests whenever I push code or open a pull request.

### 2. What is CI?

CI means Continuous Integration. It automatically checks whether new code works before it is merged into the main branch.

### 3. Why did you add CI to this project?

I added CI so that backend tests run automatically on GitHub. This helps catch bugs early and makes the project more reliable.

### 4. What does this workflow do?

The workflow sets up Python, installs backend dependencies from `backend/requirements.txt`, and runs the backend tests using:

```bash
python -m pytest -q
```

### 5. Why do we run tests in GitHub Actions if they already pass locally?

Local tests prove the code works on my machine. CI proves the code also works in a clean environment on GitHub. This reduces “works on my machine” problems.

### 6. What does `actions/checkout@v4` do?

It downloads the repository code into the GitHub Actions runner so the workflow can access and test the project files.

### 7. What does `actions/setup-python@v5` do?

It installs and configures the Python version needed by the project inside the GitHub Actions runner.

### 8. Why did we use `working-directory: backend`?

The backend code and `requirements.txt` are inside the `backend` folder, so the workflow needs to run commands from there.

### 9. What does `pip install -r requirements.txt` do?

It installs all backend dependencies listed in `requirements.txt`, including FastAPI, Pytest, and HTTPX.

### 10. What does a passing check on a pull request mean?

It means the automated workflow ran successfully and the backend tests passed before merging.

## 30-second interview answer

I added GitHub Actions CI to automatically run backend tests on every push and pull request to `main`. The workflow uses a GitHub-hosted Ubuntu runner, sets up Python 3.12, installs dependencies from `backend/requirements.txt`, and runs `python -m pytest -q` from the backend folder. This makes the project more reliable because every pull request now shows whether the backend tests pass before merging.
