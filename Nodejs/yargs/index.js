const yargs = require("yargs");
const app = require('./app.js');
const argv = yargs.argv;

if (argv._[0] === "add") {
  app.add(argv.title, argv.body);
}

//print body content
if (argv._[0] === "body") {
  app.listBody();
}

if(argv._[0]==="title"){
  app.listtitle();
}

if(argv._[0]==='list'){
  app.getAllNote();
}

if(argv._[0]==="read"){
  app.readNotes();
}

if(argv._[0]==="remove"){
  app.removeNote(argv.title);
}