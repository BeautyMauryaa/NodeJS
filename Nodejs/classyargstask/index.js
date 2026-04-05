const yargs=require("yargs");
const app=require('./app.js');
const argv=yargs.argv;
if(argv._[0]=='start'){
    app.add(argv.title,argv.body);
}
if(argv._[0]=="list"){
    app.listNotes();
}