const http = require('http');
const student = require('./student.js');

const command = process.argv[2];

if (command === 'add') {
    const name = process.argv[3];
    const course = process.argv[4];
    const semester = process.argv[5];

    student.addstudent(name, course, semester);
    console.log("Student added");
}

else if (command === 'view') {
    console.log(student.loadStudents());
}

else if (command === 'delete') {
    const name = process.argv[3];
    student.removeStudents(name);
    console.log("Student deleted");
}

else if (command === 'update') {
    const name = process.argv[3];
    const course = process.argv[4];
    const semester = process.argv[5];

    student.updateStudents(name, course, semester);
    console.log("Student updated");
}

else {
    console.log("Invalid command");
}
