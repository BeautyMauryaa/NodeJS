const fs=require('fs');

const add=(title,body)=>{
    let notes=[];
    let note={
        title:title,
        body:body
    }  
    notes.push(note);
    fs.writeFileSync('notes.json',JSON.stringify(notes,null,2));
    console.log("Notes added...");
    
};
// const listNotes=()=>{
//     let notes=[];

// }
