// // index.js
// const yargs = require('yargs');
// const notes = require('./notes');

// // Add command
// yargs.command({
//   command: 'add',
//   describe: 'Add a new note',
//   builder: {
//     title: {
//       describe: 'Note title',
//       demandOption: true,
//       type: 'string'
//     },
//     body: {
//       describe: 'Note body',
//       demandOption: true,
//       type: 'string'
//     }
//   },
//   handler: (argv) => {
//     notes.addNote(argv.title, argv.body);
//   }
// });

// // Remove command
// yargs.command({
//   command: 'remove',
//   describe: 'Remove a note',
//   builder: {
//     title: {
//       demandOption: true,
//       type: 'string'
//     }
//   },
//   handler: (argv) => {
//     notes.removeNote(argv.title);
//   }
// });

// // List command
// yargs.command({
//   command: 'list',
//   describe: 'List all notes',
//   handler: () => {
//     notes.listNotes();
//   }
// });

// // Read command
// yargs.command({
//   command: 'read',
//   describe: 'Read a note',
//   builder: {
//     title: {
//       demandOption: true,
//       type: 'string'
//     }
//   },
//   handler: (argv) => {
//     notes.readNote(argv.title);
//   }
// });

// yargs.parse();

const yargs=require('yargs');
const notes=require('./notes.js');
yargs.command({
    command:'add',
    describe:'Add new notes',
    builder:{
        title:{
            describe:'Note title',
            demandoption:true,
            type:'string'
        },
        body:{
            describe:'note body',
            demandoption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
         notes.addnotes(argv.title,argv.body);
    }
});

yargs.command({
    command:'remove',
    describe:'Remove notes',
    builder:{
        title:{
            ddemandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
        notes.removeNote(argv.title);
    }
});

yargs.command({
    command:'list',
    describe:'list all note',
    handler:()=>{
        notes.listNotes();
    }
});

yargs.command({
    command:'read',
    describe:'read a notes',
    builder:{
        title:{
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
        notes.readNote(argv.title);
    }
});
yargs.parse();



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



















const fs = require('fs');

// Load students
const loadStudents = () => {
  try {
    const data = fs.readFileSync('students.json');
    return JSON.parse(data.toString());
  } catch {
    return [];
  }
};

// Save students
const saveStudents = (students) => {
  fs.writeFileSync('students.json', JSON.stringify(students, null, 2));
};

// Add student
const addStudent = (id, name, course) => {
  const students = loadStudents();
  const duplicate = students.find(s => s.id === id);

  if (!duplicate) {
    students.push({ id, name, course });
    saveStudents(students);
    console.log("Student added");
  } else {
    console.log("Student ID already exists");
  }
};

// View students
const viewStudents = () => {
  const students = loadStudents();
  students.forEach(s =>
    console.log(`ID: ${s.id}, Name: ${s.name}, Course: ${s.course}`)
  );
};

// Delete student
const deleteStudent = (id) => {
  const students = loadStudents();
  const filtered = students.filter(s => s.id !== id);

  if (students.length > filtered.length) {
    saveStudents(filtered);
    console.log("Student deleted");
  } else {
    console.log("Student not found");
  }
};

// Update student
const updateStudent = (id, name, course) => {
  const students = loadStudents();
  const student = students.find(s => s.id === id);

  if (student) {
    student.name = name;
    student.course = course;
    saveStudents(students);
    console.log("Student updated");
  } else {
    console.log("Student not found");
  }
};

module.exports = {
  addStudent,
  viewStudents,
  deleteStudent,
  updateStudent
};...........const yargs = require('yargs');
const students = require('./students');

// Add
yargs.command({
  command: 'add',
  describe: 'Add student',
  builder: {
    id: { demandOption: true, type: 'number' },
    name: { demandOption: true, type: 'string' },
    course: { demandOption: true, type: 'string' }
  },
  handler(argv) {
    students.addStudent(argv.id, argv.name, argv.course);
  }
});

// View
yargs.command({
  command: 'view',
  describe: 'View all students',
  handler() {
    students.viewStudents();
  }
});

// Delete
yargs.command({
  command: 'delete',
  describe: 'Delete student',
  builder: {
    id: { demandOption: true, type: 'number' }
  },
  handler(argv) {
    students.deleteStudent(argv.id);
  }
});

// Update
yargs.command({
  command: 'update',
  describe: 'Update student',
  builder: {
    id: { demandOption: true, type: 'number' },
    name: { demandOption: true, type: 'string' },
    course: { demandOption: true, type: 'string' }
  },
  handler(argv) {
    students.updateStudent(argv.id, argv.name, argv.course);
  }
});

yargs.parse();
 


const http = require('http');
const students = require('./students');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  // ADD student
  if (req.method === 'POST' && req.url === '/add') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const data = JSON.parse(body);
      students.addStudent(data.id, data.name, data.course);
      res.end(JSON.stringify({ message: 'Student added' }));
    });
  }

  // VIEW students
  else if (req.method === 'GET' && req.url === '/view') {
    res.end(JSON.stringify(students.getStudents()));
  }

  // DELETE student
  else if (req.method === 'DELETE' && req.url.startsWith('/delete')) {
    const id = parseInt(req.url.split('=')[1]);
    students.deleteStudent(id);
    res.end(JSON.stringify({ message: 'Student deleted' }));
  }

  // UPDATE student
  else if (req.method === 'PUT' && req.url === '/update') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const data = JSON.parse(body);
      students.updateStudent(data.id, data.name, data.course);
      res.end(JSON.stringify({ message: 'Student updated' }));
    });
  }

  else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
