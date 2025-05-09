# React Note Taker

A simple note-taking application built with React and TypeScript.

## Features

- List of notes
- Add new notes
- Containerized with Docker

## Getting Started

### Prerequisites

- Docker and Docker Compose
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

# Stop the app
make stop
```

Using Docker Compose directly:

```bash
# Build and run
docker-compose up

# Run in detached mode
docker-compose up -d

# Stop containers
docker-compose down
```

The app will be available at http://localhost:3000

## Project Structure

```
.
├── Dockerfile
├── Makefile
├── docker-compose.yml
├── package.json
├── public/
│   └── index.html
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── components/
│   │   ├── AddNote.css
│   │   ├── AddNote.tsx
│   │   ├── NoteList.css
│   │   └── NoteList.tsx
│   ├── index.css
│   └── index.tsx
└── tsconfig.json
```
