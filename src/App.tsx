import React, { useState } from 'react';
import './App.css';
import NoteList from './components/NoteList';
import AddNote from './components/AddNote';

interface Note {
  id: number;
  text: string;
  date: Date;
}

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [currentView, setCurrentView] = useState<'list' | 'add'>('list');

  const addNote = (text: string) => {
    const newNote: Note = {
      id: Date.now(),
      text,
      date: new Date()
    };
    setNotes([...notes, newNote]);
    setCurrentView('list');
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Note Taking App</h1>
        <div className="view-buttons">
          {currentView === 'list' ? (
            <button onClick={() => setCurrentView('add')}>Add Note</button>
          ) : (
            <button onClick={() => setCurrentView('list')}>List Notes</button>
          )}
        </div>
      </header>
      <main>
        {currentView === 'list' ? (
          <NoteList notes={notes} onDeleteNote={deleteNote} />
        ) : (
          <AddNote onAddNote={addNote} />
        )}
      </main>
    </div>
  );
}

export default App; 