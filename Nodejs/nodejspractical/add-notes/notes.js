const fs = require('fs');

// Load notes from JSON
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    return JSON.parse(dataBuffer.toString());
  } catch {
    return [];
  }
};

// Save notes to JSON
const saveNotes = (notes) => {
  fs.writeFileSync('notes.json', JSON.stringify(notes, null, 2));
};

// Add note with calculation
const addNote = (operation, a, b) => {
  let result;

  if (operation === 'add') {
    result = a + b;
  } else if (operation === 'sub') {
    result = a - b;
  } else {
    result = 'Invalid operation';
  }

  const notes = loadNotes();

  notes.push({
    title: operation,
    body: `${a} ${operation} ${b}`,
    result: result
  });

  saveNotes(notes);
};

// Remove note by title
const removeNote = (title) => {
  const notes = loadNotes();
  const filteredNotes = notes.filter(note => note.title !== title);
  saveNotes(filteredNotes);
};

// List all notes
const listNotes = () => {
  const notes = loadNotes();
  notes.forEach(note => {
    console.log(`${note.title} → ${note.result}`);
  });
};

module.exports = {
  addNote,
  removeNote,
  listNotes
};
