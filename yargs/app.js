const fs = require('fs');

//add object in json file
const add = (title, body) => {
  let notes = [];

  const note = {
    title,
    body
  };

  try{
   const data=fs.readFileSync('notes.json','utf-8');
  notes=JSON.parse(data);
  }catch(e){
    console.log(e);
  }



  //if title already exist
  if(notes.find(note=>note.title===title)
    ){
      console.log("Note title taken");
      return;
    }

  notes.push(note);

fs.writeFileSync('notes.json', JSON.stringify(notes, null, 2));
console.log("Notes added...");
};



//print body content
const listBody = () => {
  const notes = JSON.parse(fs.readFileSync('notes.json', 'utf-8'));
  notes.forEach((note) => {
    if(notes=>notes.body!=body){
      console.log(note.body);
    }else{
       console.log("json file is empty")
    }
  });
};

//print title only:
const listtitle = () => {
  const notes = JSON.parse(fs.readFileSync('notes.json', 'utf-8'));
  notes.forEach((note) => {
    if(notes=>notes.title===title){
      console.log(note.title);
    }else{
      console.log("json file is empty no title in this.")
    }
  });
};



//print all notes present in json file
const getAllNote=()=>{
  try{
    let data=fs.readFileSync('notes.json','utf-8');
    let notes=JSON.parse(data);
    if(notes.length===0){
      console.log("No notes found");
    }else{
      notes.forEach((currNote,index)=>{
        console.log(`${index+1}:${currNote.title}-${currNote.body}`);
      })
    }
  }
  catch(e){
      console.log("No notes availabe. File missing or empty.");
    }
}


//remove notes by title 
const removeNote = (title) => {
  try {
    const data = fs.readFileSync('notes.json', 'utf-8');
    const notes = JSON.parse(data);

    const updatedNotes = notes.filter(note => note.title !== title);

    if (notes.length === updatedNotes.length) {
      console.log("No note found with this title");
      return;
    }else{

    fs.writeFileSync('notes.json', JSON.stringify(updatedNotes, null, 2));
    console.log("Title removed successfully");
    }

  } catch (err) {
    console.log("Error reading or writing file");
  }
};



//read the file and print data written
const readNotes=()=>{
  fs.writeFile("notes.json", jsonData, 'utf8', (err) => {
    if (err) {
        console.error('Error writing to file', err);
    } else {
       le.log('Data written to file');
    }
});
}

//remove the notes by title
module.exports = {
  add,
  listBody,
  readNotes,
  listtitle,
  getAllNote,
  removeNote
};
