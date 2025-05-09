import React, { useState } from 'react';
import './AddNote.css';

interface AddNoteProps {
  onAddNote: (text: string) => void;
}

const AddNote: React.FC<AddNoteProps> = ({ onAddNote }) => {
  const [noteText, setNoteText] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (noteText.trim().length === 0) {
      return;
    }
    
    onAddNote(noteText);
    setNoteText('');
  };
  
  return (
    <div className="add-note">
      <h2>Add a New Note</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="note-text">Note</label>
          <textarea
            id="note-text"
            value={noteText}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setNoteText(e.target.value)}
            placeholder="Type your note here..."
            rows={6}
          />
        </div>
        <button type="submit" className="submit-btn">Add Note</button>
      </form>
    </div>
  );
};

export default AddNote; 