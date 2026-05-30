// function getStudentName(name){
//     return name;
// }


// function getStudentCourse(course){
//     return course;
// }

// module.exports={getStudentName,getStudentCourse}




//Q. 1.Create a file named student.js 2.Define a studetn object containing the following properties;
// let student={
//     name:"Beauty",
//     Course:"Web-Dev",
//     Roll:26,
//     Year:2026,

//     getStudentName(){
//         return this.name;
//     },
//     getStudentCourse(){
//         return this.Course;
//     },
//     getStudentDetails() {
//         return `${this.name}, Roll: ${this.roll}, Year: ${this.year}`;
//     },

//     updateCourse(newCourse) {
//         this.course = newCourse;
//         return this.course;
//     },

//     deleteStudent() {
//         return "Student deleted";
//     }
// }

// module.exports={student};

// student.js
// let student = {
//     name: "Beauty",
//     course: "Web-Dev",
//     roll: 26,
//     year: 2026,

//     getStudentName() {
//         return this.name;
//     },

//     getStudentCourse() {
//         return this.course;
//     },

//     getStudentDetails() {
//         return `${this.name}, Roll: ${this.roll}, Year: ${this.year}`;
//     },

//     updateCourse(newCourse) {
//         this.course = newCourse;
//         return this.course;
//     },

//     deleteStudent() {
//         return "Student deleted";
//     }
// };

// module.exports = student;





//Student management system using node js module:
// create a filenamed student.js thatmaintains an array to store multiple studentobject.
// let student=[
//     {name:"Beauty",rollno:1,course:"web"},
//     {name:"Noova",rollno:2,course:"ai" },
//     {name:"Raj",rollno:3,course:"ml"},
//     {name:"vikahs",rollno:4,course:"java"},
//     addStudent(name,rollno,course){
//         this.student.Push({name,rollno,course});
//     },
//     getStudentByRollNo(rollno){
//         return this.student.push(student=>student.rollno==rollno)
//     }

// ]


// const studentManager={
//     student:[],
//     addstudent(name,rollno,course){
//         this.student.push({name,rollno,course});
//     },
//     getStudentByRollNo(rollno){
//         return this.student.push(student=>student.rollno==rollno);
//     },
//     getAllStudents(){
//         return this.student;
//     },
//      updateStudentCourse(rollno,course){
//          const student=this.getStudentByRollNo(rollno);
//          if(students){
//             student.course=course;
//             return student;
//          }
//      },
     
//      }

//      module.exports=studentManager
    

// student.js

// const studentManager = {
//   students: [],

//   addStudent(name, rollno, course) {
//     this.students.push({ name, rollno, course });
//   },

//   getStudentByRollNo(rollno) {
//     return this.students.find(student => student.rollno === rollno);
//   },

//   getAllStudents() {
//     return this.students;
//   },

//   updateStudentCourse(rollno, course) {
//     const student = this.getStudentByRollNo(rollno);

//     if (!student) {
//       return "Student not found";
//     }

//     student.course = course;
//     return student;
//   },
//   deleteStudent(rollno){

//   }
// };

// module.exports = studentManager;


// const studentManager={
//     student:[], //create a empty student array of object
//     addstudent(name,roll,course){
//         return this.student.push({name,roll,course});
//     },
//    getALLStudent(){
//     return this.student;
//    }  
// }
// module.exports=studentManager;


// const StudentManager={
//     student:[],
//     //add student
//     addstudent(name,roll,course){
//         return this.student.push({name,roll,course});
//     },
//     //print all added student
//     getAllStudent(){
//         return this.student;
//     },
//     //get student by roll node
//     getStudentByRoll(roll){
//         return this.student.find(student=>student.roll=-roll);
//     },
//     updateStudentCourse(roll,course){
//         const student=this.getStudentByRoll(roll);
//         if(student){
//             student.course=course;
//             return student;
//         }
//     }
// }
// module.exports=StudentManager;


// const StudentManager={
//     student:[],
//     addstudent(name,roll,course){
//         return this.student.push({name,student,course});
//     },
//     //get student by rollno
//     getstudentbyroll(roll){
//         return this.student.find(student=>student.roll==roll);
//     },
//     //get all student
//     getallstudent(){
//         return this.student;
//     },
//     //update student course by roll nao
//     updatestudentcourse(roll,course){
//         const student=this.getstudentbyroll(roll);
//         if(student){
//             student.course=course;
//             return student;
//         }
//     }
// }




const StudentManager={
    student:[],
    addstudent(name,roll,course){
        return this.student.push({name,roll,course});
        },
        getstudentByroll(roll){
            return this.student.find(student=>student.roll==roll);
        },
        getallstudent(){
            return this.student;
        },
        updatestudentcourse(roll,course){
            const student=this.getstudentByroll(roll);
            if(student){
                student.course=course;
                return student;
            }
        },
        deletestudent(roll){
            const student=this.getstudentByroll(roll);
            if(student){
                this.student.splice(this.student.indexOf(student),1);
                return student;
            }
        }
}

module.exports=StudentManager;