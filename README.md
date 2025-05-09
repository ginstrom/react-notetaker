# React Note Taker

A simple note-taking application built with React and TypeScript.

<img width="886" alt="Screenshot 2025-05-09 at 19 01 01" src="https://github.com/user-attachments/assets/3e8ed623-39a9-4d0c-8b0a-2f3bdbc08911" />

## Features

- List of notes
- Add new notes
- Containerized with Docker

## Getting Started

### Prerequisites

- Docker and Docker Compose
  - You can use either `docker-compose` (older syntax with hyphen) or `docker compose` (newer syntax with space)
- Make (optional, for using Makefile commands)
- VSCode (optional, for enhanced developer experience - [see VSCode Docker Setup](docs/VSCode-Docker-Setup.md))

### Running the App

Using Make:

```bash
# Build the Docker image
make build

# Run the app
make run

# Run tests
make test

# Run lint
make lint

# Stop the app
make stop
```

Using Docker Compose directly:

```bash
# Build and run with docker-compose
docker-compose up app
# Or with newer Docker CLI
docker compose up app

# Run in detached mode
docker-compose up -d app
# Or with newer Docker CLI
docker compose up -d app

# Stop containers
docker-compose down
# Or with newer Docker CLI
docker compose down
```

The app will be available at http://localhost:3000

## Continuous Integration

This project uses GitHub Actions for CI/CD. The following checks run on each pull request:

- **Unit Tests**: Runs the test suite using the Docker Compose test service
- **Linting**: Runs code quality checks using the Docker Compose lint service

CI configuration is defined in `.github/workflows/ci.yml`.
