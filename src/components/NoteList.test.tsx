import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NoteList from './NoteList';

describe('NoteList component', () => {
  const mockNotes = [
    { id: 1, text: 'Test note 1', date: new Date('2023-01-01') },
    { id: 2, text: 'Test note 2', date: new Date('2023-01-02') }
  ];
  
  const mockDeleteNote = jest.fn();
  
  test('renders empty state when no notes', () => {
    render(<NoteList notes={[]} onDeleteNote={mockDeleteNote} />);
    
    expect(screen.getByText(/No notes yet/i)).toBeInTheDocument();
  });
  
  test('renders list of notes correctly', () => {
    render(<NoteList notes={mockNotes} onDeleteNote={mockDeleteNote} />);
    
    expect(screen.getByText('Test note 1')).toBeInTheDocument();
    expect(screen.getByText('Test note 2')).toBeInTheDocument();
    expect(screen.getByText('Your Notes')).toBeInTheDocument();
    
    // Check dates are rendered
    const dateStr1 = mockNotes[0].date.toLocaleDateString();
    const dateStr2 = mockNotes[1].date.toLocaleDateString();
    expect(screen.getByText(dateStr1)).toBeInTheDocument();
    expect(screen.getByText(dateStr2)).toBeInTheDocument();
  });
  
  test('calls onDeleteNote when delete button is clicked', () => {
    render(<NoteList notes={mockNotes} onDeleteNote={mockDeleteNote} />);
    
    const deleteButtons = screen.getAllByLabelText('Delete note');
    expect(deleteButtons).toHaveLength(2);
    
    // Click the first delete button
    fireEvent.click(deleteButtons[0]);
    expect(mockDeleteNote).toHaveBeenCalledWith(1);
    
    // Click the second delete button
    fireEvent.click(deleteButtons[1]);
    expect(mockDeleteNote).toHaveBeenCalledWith(2);
    
    expect(mockDeleteNote).toHaveBeenCalledTimes(2);
  });
}); 