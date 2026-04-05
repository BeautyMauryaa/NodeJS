// // notes.js
// const fs = require('fs');
// const chalk = require('chalk');

// // Load notes
// const loadNotes = () => {
//   try {
//     const data = fs.readFileSync('notes.json');
//     return JSON.parse(data.toString());
//   } catch {
//     return [];
//   }
// };

// // Save notes
// const saveNotes = (notes) => {
//   fs.writeFileSync('notes.json', JSON.stringify(notes));
// };

// // Add note
// const addNote = (title, body) => {
//   const notes = loadNotes();
//   const duplicate = notes.find(note => note.title === title);

//   if (!duplicate) {
//     notes.push({ title, body });
//     saveNotes(notes);
//     console.log(chalk.green('Note added'));
//   } else {
//     console.log(chalk.red('Note title already exists'));
//   }
// };

// // Remove note
// const removeNote = (title) => {
//   const notes = loadNotes();
//   const filteredNotes = notes.filter(note => note.title !== title);

//   if (notes.length > filteredNotes.length) {
//     saveNotes(filteredNotes);
//     console.log(chalk.green('Note removed'));
//   } else {
//     console.log(chalk.red('No note found'));
//   }
// };

// // List notes
// const listNotes = () => {
//   const notes = loadNotes();
//   console.log(chalk.blue('Your Notes'));
//   notes.forEach(note => console.log(note.title));
// };

// // Read note
// const readNote = (title) => {
//   const notes = loadNotes();
//   const note = notes.find(note => note.title === title);

//   if (note) {
//     console.log(chalk.yellow(note.title));
//     console.log(note.body);
//   } else {
//     console.log(chalk.red('Note not found'));
//   }
// };

// module.exports = {
//   addNote,
//   removeNote,
//   listNotes,
//   readNote
// };



const fs=require('fs');
const { title } = require('process');

//lsarlr
//load
const loadNotes=()=>{
    //try-read=parse-catch
    try{
        const data=fs.readFileSync('notes.json')
        return JSON.parse(data.toString());
    }catch(err){
        return err;
    }
};

const saveNotes=(notes)=>{
    //write//stringify
    fs.writeFileSync('notes.json',JSON.stringify(notes,null,2));
}

const addnotes=(title,body)=>{
    //load-check-push-save-message
    const notes=loadNotes();
    const duplicates=notes.find(note=>note.title===title)
    if(!duplicates){
        notes.push({title,body});
        saveNotes(notes);
        console.log("nnotes added");
    }else{
        console.log("notes present");
    }
}


//remove
const removeNotes=(title)=>{
    
}