// // const student=require("./student.js")
// // console.log(student.getStudentName("Beauty"))
// // // // const course=require("./student.js")
// // console.log(student.getStudentCourse())
// // console.log(student.getStudentDetail("Student"))
// // console.log(student.updateCourse("AI/ML"))


// const student = require("./student");

// console.log(student.getStudentName());
// console.log(student.getStudentCourse());
// console.log(student.getStudentDetails());
// console.log(student.updateCourse("AI/ML"));



// const log = require("./filesystem");

// log("started");
// main.js

// const student = require("./student.js");

// student.addStudent("Beauty", 1, "Web");
// student.addStudent("Noova", 2, "AI");
// student.addStudent("Aka", 3, "Data Science");
// student.addStudent("Shreya", 4, "App");

// console.log("All Students:");
// console.log(student.getAllStudents());

// console.log("\nUpdate Course:");
// console.log(student.updateStudentCourse(2, "Node.js"));

// console.log("\nGet Student By Roll No:");
// console.log(student.getStudentByRollNo(2));


// const student=require("./student.js");
// student.addstudent("Beauty",1,"web");
// console.log(student.getALLStudent());


const student=require("./student.js")
student.addstudent("Beauty",1,"Web");
student.addstudent("Noova",2,"AI");
console.log(student.getallstudent());
console.log("print student by rollno:");
console.log(student.getstudentByroll(2));

console.log("update student course:");
console.log(student.updatestudentcourse(2,"Node.js"));
console.log("deleted student");
console.log(student.deletestudent(2));
console.log(student.getallstudent());

