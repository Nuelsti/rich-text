import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function NoteEditor({ onSave, note = '', index }) {
  const [editorContent, setEditorContent] = useState(note);

  const handleChange = (value) => {
    setEditorContent(value);
  };

  const handleSave = () => {
    onSave(editorContent, index);
  };

  return (
    <div>
      <ReactQuill value={editorContent} onChange={handleChange} theme="snow" />
      <button onClick={handleSave}>Save Note</button>
    </div>
  );
}

export default NoteEditor;
