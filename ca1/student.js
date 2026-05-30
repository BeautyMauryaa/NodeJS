const fs=require('fs');
// const student=require('./student');

const loadStudents=()=>{
    try{
        const data=fs.readFileSync('student.json');
        return JSON.parse(data.tostring());
    }
    catch{
        return [];
    }
};
const saveStudents=(students)=>{
    const data=loadStudents();
    fs.writeFileSync('student.json',JSON.stringify(students,null,2));
};

const addstudent=(name,course,semester)=>{
    const students=loadStudents();
    students.push({name,course,semester})
    // fs.writeFileSync('student.json',JSON.stringify(notes,null,id));
    saveStudents(students);
};


//remove students
const removeStudents=(name)=>{
    const students=loadStudents().filter(student=>student.name!==name);
    saveStudents(students);
};

//update student
const updateStudents=(name,course,semester)=>{
    const students=loadStudents();
    const student=students.find(students=>students.name===name);
    if(student){
        students.name=name;
        students.course=course;
        students.semester=semester;
        saveStudents(students);
    };
};

module.exports={
loadStudents,
saveStudents,
addstudent,
removeStudents,
updateStudents
}


