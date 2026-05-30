//20/01/26
const fs   = require("fs");
const student=[
    {name:"Beauty",rollno:1,course:"Web"},
    {name:"Noova",rollno:2,course:"AI"},
    {name:"Priya",rollno:3,course:"datascience"},
    {name:"shreya",rollno:4,course:"APP"}
]
fs.writeFileSync("student.json",JSON.stringify(student,null,2),"utf-8");
fs.readFileSync("student.json","utf-8");
student.push({name:"Priya",rollno:2,course:"datascience"});
fs.writeFileSync("student.json",JSON.stringify(student,null,2),"utf-8");

//JSON.stringify=convert javascript object into json string
//json.parse=convert json string into javascript object
//json string means - plain text representation of structure data that follow the strict syntax rule of the json.
//JSON.stringify(student,null,2)
//file system module in node.js
//task related to fsmodule
