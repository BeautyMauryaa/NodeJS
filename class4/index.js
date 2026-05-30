// //const http=require('http');
// // const myServer=http.createServer((req,res)=>{
// //  console.log(req.url);
// //  res.end('  Hello From Server');
// // });
// // myServer.listen(8000,(err,data)=>{
// // console.log('Server Started');
// // console.log("Open this in your Browser: http://localhost:8000");
// // });



// //Task: Develop a Node.js HTTP SERVER THAT RUNS ON PORT 8000 HANDLES Multiple routes and log every client request into a file.
// // the server should use the http module to create the server and the fs module to store request details(data,time,and requested URL)in a file namedlog.txt using appednFile() so previous datais not overwritten.
// // when a user visits/, the server must respond with "Homepage";when /about is requested the server must respond with "About us"
// // const http=require('http');
// // const fs=require('fs');

// // let visitCount={
// //    "/":0,
// //    "/about":0,
// //    "/404":0
// // };
// // const server=http.createServer((req,res)=>{
// //  console.log(req.url);
// //  fs.appendFile( "log.txt",`${new Date().toLocaleString()} | ${req.method}|${req.url}\n`,
// //  (err) => {
// //       if (err) console.error(err);
// //     });
// //  if(req.url=="/"){
// //    visitCount["/"]++;
// //     res.end("Homepage");
// //  }
// //  else if(req.url=="/about"){
// //    visitCount["/about"]++;
// //     res.end("About us");
// //  }
// //  else{
// //    visitCount["/404"]++;
// //     res.end("404 Not found error");
// //  }
// //  res.end(`${visitCount["/"]}\n${visitCount["/about"]}\n${visitCount["/404"]}`);
// // });
// // server.listen(8000,(err,data)=>{
// //     console.log('Server started');
// //     console.log("Opne this in browser:http://localhost:8000");

// // })

// const http = require('http');
// const fs = require('fs');

// let visitCount = {
//   "/": 0,
//   "/about": 0,
//   "/404": 0
// };

// const server = http.createServer((req, res) => {
//   console.log(req.url);

//   fs.appendFile(
//     "log.txt",
//     `${new Date().toLocaleString()} | ${req.method} | ${req.url}\n`,
//     (err) => {
//       if (err) console.error(err);
//     }
//   );

// //   let responseText = "";

// //   if (req.url === "/") {
// //     visitCount["/"]++;
// //     responseText = "Homepage";
// //   } 
// //   else if (req.url === "/about") {
// //     visitCount["/about"]++;
// //     responseText = "About us";
// //   } 
// //   else {
// //     visitCount["/404"]++;
// //     responseText = "404 Not found error";
// //   }

// //   responseText = `Visits:
// // Home: ${visitCount["/"]}
// // About: ${visitCount["/about"]}
// // 404: ${visitCount["/404"]}
// // `;

// //   res.end(responseText);
// // });

// switch(req.url){
//     case "/":
//     visitCount["/"]++;
//     res.writeHead(200,{"Content-Type":"text/html"});
//     res.end(`
//       <html>
//       <head>
//       <title>Home</title>
//       </head>
//       <body>
//       <h1>Home</h1>
//       <p>Visits: ${visitCount["/"]}</p>
//       </body>
//       </html>
//       `);
//       break;

//     case "/about":
//     visitCount["/about"]++;
//     res.writeHead(200,{"Content-Type":"application.json"});
//     res.end(JSON.stringify({
//         visits:visitCount["/about"],
//         message:"About us "
//     }));
//     break;
//     default:
//       res.writeHead(404,{"Content-Type":"text/html"});
//       res.end('Contact us at:contact@example.com \n Visits: ${visitCount["/contact"]}');
//    }

// });
// server.listen(8000, () => {
//   console.log('Server started');
//   console.log("Open this in browser: http://localhost:8000");
// });




//Question: Create a server using the http module in node js.
//-2.run the server on port 8000.
//-3.Create an array of student result object containing the following properties;
// 1.Name
// 2.Roll no
// 4.Marks
// 5.Grade
//-4.When the user visitis /,display an HTML welcome page titled Student Result Portal.
//-5.When the user visits /student, display the student result in the form of a table.
//-6.When the user visits /api/results, display the student data in the form of a JSON object.
//-7.when the user visits /help, return a plain text message expaling how to use the portal.
//-8.if the user enter any other route ,return:
//.status code 404
//.error message "Page not found"
//-9.use proper Content-Type header for each route.
//.HTML->text/html
//.JSON->application/json
//.Plain text->text/plain
//-10.Display a console message when the server start.



const http = require('http');
const fs = require('fs');

// let visitCount = {
//   "/": 0,
//   "/about": 0,
//   "/404": 0
// };

const server = http.createServer((req, res) => {
  console.log(req.url);

  fs.appendFile(
    "log.txt",
    `${new Date().toLocaleString()} | ${req.method} | ${req.url}\n`,
    (err) => {
      if (err) console.error(err);
    }
  );

switch(req.url){
    case "/":
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(`
      <html>
      <head>
      <title>Student result portal</title>
      </head>
      <body>
      <h1>HTML Welcome Page</h1>
      <P>student result: "/students"</p>
      <p>api results: "/api/results"</p>
      <p>help: "/help"</p>
      </body>
      </html>
      `);
      break;

    case "/students":
    res.writeHead(200,{"Content-Type":"application.json"});
    res.end(`
      <html>
      <head>
      <title>Student result portal</title>
      </head>
      <body>
      <h1>Student Result Data:</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Roll No</th>
          <th>Marks</th>
          <th>Grade</th>
        </tr>
       <tr>
         <td>Beauty</td>
         <td>1</td>
         <td>100</td>
         <td>A</td>
        </tr>
        <tr>
          <td>Beauty</td>
          <td>1</td>
          <td>100</td>
          <td>A</td>
        </tr>
        <tr>
          <td>Beauty</td>
          <td>1</td>
          <td>100</td>
          <td>A</td>
        </tr>
        <tr>
          <td>Beauty</td>
          <td>1</td>
          <td>100</td>
          <td>A</td>
        </tr>
      </table>
      </body>
      </html>
    `);
    break;
    case "/api/results":
    res.writeHead(200,{"Content-Type":"application.json"});
    res.end(JSON.stringify({
      name:"Beauty",
      roll_no:1,
      marks:100,
      grade:"A"
    }));
    break;
    case "/help":
      res.writeHead(200,{"Content-Type":"text/plain"});
      res.end('Contact us at:contact@example.com \n Visits: ${visitCount["/contact"]}');
      break;
  default:
    res.writeHead(404,{"Content-Type":"text/plain"});
    res.end('Page not found');
   }

});
server.listen(8000, () => {
  console.log('Server started');
  console.log("Open this in browser: http://localhost:8000");
});

