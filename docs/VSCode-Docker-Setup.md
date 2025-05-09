# VSCode Docker Integration Setup

This project is configured to use Docker with VSCode for dependency checking, code intelligence, and development. Below are instructions on how to use this setup.

## Prerequisites

1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop)
2. Install [Visual Studio Code](https://code.visualstudio.com/)
3. Install the following VSCode extensions:
   - [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
   - [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)

## Getting Started

### Option 1: Using Dev Containers (Recommended)

The simplest way to use this setup is with VSCode's Dev Containers feature:

1. Open the project folder in VSCode
2. When prompted, click "Reopen in Container" or
3. Press `F1`, type "Remote-Containers: Reopen in Container" and press Enter

This will:
- Build the Docker container based on the Dockerfile
- Mount your project files to the container
- Configure VSCode to use the TypeScript, ESLint, and other tools from inside the container

### Option 2: Running Docker Manually with VSCode Tasks

If you prefer to run Docker manually:

1. Open the project in VSCode
2. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac)
3. Type "Tasks: Run Task" and select it
4. Choose "Docker: Start Development Environment"

## Available Tasks

Several VSCode tasks have been configured for convenience:

- **Docker: Start Development Environment** - Starts the development container
- **Docker: Stop Development Environment** - Stops the container
- **Docker: Rebuild and Start** - Rebuilds and starts the container
- **Docker: Run Tests** - Runs the test suite in the container

## Debugging

A debugging configuration is included that allows you to attach to the Node.js process running in the container:

1. Start the development container
2. Go to the Debug panel in VSCode
3. Select "Docker: Attach to Node" from the dropdown
4. Press F5 to attach the debugger

## Additional Information

- TypeScript language server runs inside the container
- ESLint and other code quality tools run inside the container
- The `.vscode/settings.json` file configures VSCode to use the tools from the container
- Dependencies are installed inside the container, so you don't need to run `npm install` locally 