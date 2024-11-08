import React from 'react';
import { deleteNoteFromLocalStorage } from '../utils/localStorageUtils.jsx'

function NotesList({ notes, onEdit }) {
  const handleDelete = (index) => {
    deleteNoteFromLocalStorage(index);
    window.location.reload();  // To refresh the list
  };

  return (
    <div>
      <h2>Notes</h2>
      {notes.map((notes, index) => (
        <div key={index}>
          <div dangerouslySetInnerHTML={{ __html: notes }} > </div>
          <button onClick={() => onEdit(notes, index)}>Edit</button>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default NotesList;
