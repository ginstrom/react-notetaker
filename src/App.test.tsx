import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders app title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Note Taking App/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('starts with empty note list', () => {
    render(<App />);
    const emptyMessage = screen.getByText(/No notes yet/i);
    expect(emptyMessage).toBeInTheDocument();
  });

  test('can switch between list and add note views', () => {
    render(<App />);
    
    // Initial state should show list view with "Add Note" button
    const addNoteButton = screen.getByText(/Add Note/i);
    expect(addNoteButton).toBeInTheDocument();
    
    // Click "Add Note" to switch to add view
    fireEvent.click(addNoteButton);
    
    // Should now show form with "List Notes" button
    const listNotesButton = screen.getByText(/List Notes/i);
    expect(listNotesButton).toBeInTheDocument();
    const formHeading = screen.getByText(/Add a New Note/i);
    expect(formHeading).toBeInTheDocument();
    
    // Click "List Notes" to switch back
    fireEvent.click(listNotesButton);
    
    // Should be back to list view
    expect(screen.getByText(/Add Note/i)).toBeInTheDocument();
  });

  test('can add and delete a note', () => {
    render(<App />);
    
    // Navigate to add note view
    fireEvent.click(screen.getByText(/Add Note/i));
    
    // Type in the textarea
    const textarea = screen.getByLabelText(/Note/i);
    fireEvent.change(textarea, { target: { value: 'Test note content' } });
    
    // Submit the form
    fireEvent.click(screen.getByText(/Add Note/i, { selector: 'button' }));
    
    // Should be back on list view with the new note
    expect(screen.getByText('Test note content')).toBeInTheDocument();
    
    // Delete the note
    const deleteButton = screen.getByLabelText(/Delete note/i);
    fireEvent.click(deleteButton);
    
    // Note should be gone, back to empty state
    expect(screen.getByText(/No notes yet/i)).toBeInTheDocument();
  });
}); 