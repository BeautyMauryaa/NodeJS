console.log("Hello World!");
console.log(__dirname);//current folder path
console.log(__filename);//current file path
console.log(process); //info about node process


//process object(backend reality)
console.log("process object");
console.log(process.version)
console.log(process.env);

const PORT=process.env.PORT || 3000;
console.log("running on port",PORT);


//blocking
const data = fs.readFileSync("file.txt");
console.log(data);

//non-blocking
fs.readFile("file.txt",(err,data)=>{
    console.log(data);
})


//REPL-read(take input form user),eval(execute code),print(show output),loop(wait for another input)
//for start=node
//for exit=exit
