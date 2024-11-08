import React, { useState, useEffect } from 'react';
import NoteEditor from '././components/NoteEditor/index.jsx';
import NotesList from '././components/Notelist.jsx';
import { saveNoteToLocalStorage, getNoteFromLocalStorage } from '././utils/localStorageUtils.jsx';
import './style.css'

function App() {
  const [notes, setNotes] = useState(getNoteFromLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [currentNote, setCurrentNote] = useState('');
  const [currentNoteIndex, setCurrentNoteIndex] = useState(null);

  const handleSaveNote = (content, index) => {
    let updatedNotes = [...notes];
    if (index !== undefined) {
      updatedNotes[index] = content;  // Update existing note
    } else {
      updatedNotes.push(content);  // Add new note
    }
    setNotes(updatedNotes);
    saveNoteToLocalStorage(updatedNotes);
    setIsEditing(false);
    setCurrentNote('');
  };

  const handleEditNote = (notes, index) => {
    setIsEditing(true);
    setCurrentNote(notes);
    setCurrentNoteIndex(index);
  };

  return (
    <div>
      <h1>Personalized Notes App</h1>
      {isEditing ? (
        <NoteEditor onSave={handleSaveNote} notes={currentNote} index={currentNoteIndex} />
      ) : (
        <NotesList notes={notes} onEdit={handleEditNote} />
      )}
      <button onClick={() => setIsEditing(true)}>Add New Note</button>
    </div>
  );
}

export default App;
