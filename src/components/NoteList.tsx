import React from 'react';
import './NoteList.css';

interface Note {
  id: number;
  text: string;
  date: Date;
}

interface NoteListProps {
  notes: Note[];
  onDeleteNote: (id: number) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, onDeleteNote }) => {
  if (notes.length === 0) {
    return <div className="empty-notes">No notes yet. Add your first note!</div>;
  }

  return (
    <div className="note-list">
      <h2>Your Notes</h2>
      <div className="notes-container">
        {notes.map(note => (
          <div className="note-card" key={note.id}>
            <p>{note.text}</p>
            <div className="note-footer">
              <div className="note-date">
                {note.date.toLocaleDateString()}
              </div>
              <button 
                className="delete-button" 
                onClick={() => onDeleteNote(note.id)}
                aria-label="Delete note"
              >
                <span role="img" aria-hidden="true">🗑️</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteList; 