// const express=require('express');
// const path = require('path');
// const app=express();
// const port=process.env.PORT || 3000;

// app.use(express.static('public'));
// app.get('/',(req,res)=>{ //./= home routes , get method= to get the data
//     // res.send("Welcome to Express Hub!");//send method= to send the data
//     //res.sendFile(path.join(__dirname,'public','index.html'));
// });

// // app.get('/user/:name',(req,res)=>{
// //     const name=req.params.name;
// //     res.send(`Welcome ${name} to the Express Hub!`); // params=allows you to capture dynamic values from the URL path
// // })


// // //addition of two number
// // app.get('/add/num1/:num1/num2/:num2',(req,res)=>{
// //     const num1=parseInt(req.params.num1);
// //     const num2=parseInt(req.params.num2);
// //     const sum=num1+num2;
// //     res.send(`The sum of ${num1} and ${num2} is ${sum}`)
// // })
// // app.listen(port,()=>{ //listen methos=to listen the port , port = 3000, callback function
// //     console.log(`Server is running on port ${port}`);
// // });



// //13:02:26 
// //res.status().json(),res.json(),res.download()
// //res.rendor()

const express=require('express');
const ejs=require('ejs') //ejs=view engine
const path=require('path');
const app=express();
const port=process.env.PORT || 3000;


app.set('view engine','ejs')
app.get('/', (req, res) => {
    res.render('index', { title: "World" });
});


app.get('/about',(req,res)=>{
    res.send("About us......")
})

app.listen(port,()=>{
    console.log("welcome to rendering the view file using ejs!")
})
