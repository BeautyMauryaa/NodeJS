fs.appendfilesync(Path,data);



const fs=require("fs");
function log(message){
    fs.appendFileSync("log.txt",`${message}`);
}

module.exports=log;