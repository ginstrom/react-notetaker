This is a note-taking app written in typescript/react.

The app runs inside docker-compose using nodejs.

# Architecture

The application follows a simple component-based architecture using React and TypeScript for type safety.

## Technologies

- React 18 with TypeScript
- Docker and Docker Compose for containerization
- Makefile for simplified commands

## Components

- `App`: Main component that manages state and view switching
- `NoteList`: Component for displaying the list of notes
- `AddNote`: Component for adding new notes

## State Management

The application uses React's built-in `useState` hook for state management. The main state includes:
- List of notes
- Current view (list or add)

## Data Model

```typescript
interface Note {
  id: number;
  text: string;
  date: Date;
}
```

# Views

- List notes: Displays all saved notes in a grid layout
- Add note: Form for creating new notes