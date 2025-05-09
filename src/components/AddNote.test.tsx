import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddNote from './AddNote';

describe('AddNote component', () => {
  const mockAddNote = jest.fn();
  
  beforeEach(() => {
    mockAddNote.mockClear();
  });
  
  test('renders form elements correctly', () => {
    render(<AddNote onAddNote={mockAddNote} />);
    
    expect(screen.getByText('Add a New Note')).toBeInTheDocument();
    expect(screen.getByLabelText('Note')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Type your note here...')).toBeInTheDocument();
    expect(screen.getByText('Add Note')).toBeInTheDocument();
  });
  
  test('updates textarea value when typing', () => {
    render(<AddNote onAddNote={mockAddNote} />);
    
    const textarea = screen.getByLabelText('Note');
    fireEvent.change(textarea, { target: { value: 'Test note content' } });
    
    expect(textarea).toHaveValue('Test note content');
  });
  
  test('calls onAddNote with text when form is submitted', () => {
    render(<AddNote onAddNote={mockAddNote} />);
    
    const textarea = screen.getByLabelText('Note');
    fireEvent.change(textarea, { target: { value: 'Test note content' } });
    
    const submitButton = screen.getByText('Add Note');
    fireEvent.click(submitButton);
    
    expect(mockAddNote).toHaveBeenCalledWith('Test note content');
    expect(textarea).toHaveValue(''); // Text field should be cleared
  });
  
  test('does not call onAddNote when submitting with empty text', () => {
    render(<AddNote onAddNote={mockAddNote} />);
    
    // Submit without entering text
    const submitButton = screen.getByText('Add Note');
    fireEvent.click(submitButton);
    
    expect(mockAddNote).not.toHaveBeenCalled();
  });
  
  test('does not call onAddNote when submitting with only whitespace', () => {
    render(<AddNote onAddNote={mockAddNote} />);
    
    const textarea = screen.getByLabelText('Note');
    fireEvent.change(textarea, { target: { value: '   ' } });
    
    const submitButton = screen.getByText('Add Note');
    fireEvent.click(submitButton);
    
    expect(mockAddNote).not.toHaveBeenCalled();
  });
}); 