const yargs = require('yargs');
const notes = require('./notes');

// Add command
yargs.command({
  command: 'add',
  describe: 'Add two numbers',
  builder: {
    a: { demandOption: true, type: 'number' },
    b: { demandOption: true, type: 'number' }
  },
  handler(argv) {
    notes.addNote('add', argv.a, argv.b);
    console.log('Addition note added');
  }
});

// Subtract command
yargs.command({
  command: 'sub',
  describe: 'Subtract two numbers',
  builder: {
    a: { demandOption: true, type: 'number' },
    b: { demandOption: true, type: 'number' }
  },
  handler(argv) {
    notes.addNote('sub', argv.a, argv.b);
    console.log('Subtraction note added');
  }
});

// Remove command
yargs.command({
  command: 'remove',
  describe: 'Remove note',
  builder: {
    title: { demandOption: true, type: 'string' }
  },
  handler(argv) {
    notes.removeNote(argv.title);
    console.log('Note removed');
  }
});

// List command
yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler() {
    notes.listNotes();
  }
});

yargs.parse();
