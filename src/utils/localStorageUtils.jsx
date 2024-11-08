// save the notes
export const saveNoteToLocalStorage = (notes) => {
    localStorage.getItem('notes', JSON.stringify(notes));
};

// get the notes
export const getNoteFromLocalStorage = () =>{
    const notes= localStorage.getItem('notes');

    return notes ? JSON.parse(notes) : [];
};

// delete the notes

export const deleteNoteFromLocalStorage = (index) => {

    // get the notes
    const notes = getNoteFromLocalStorage();
    // delete using index
    notes.splice(index, 1);
    // save update
    saveNoteToLocalStorage(notes)

};
