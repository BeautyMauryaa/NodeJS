// const add=require('./add.js');
// //take input fromuser
// const num1=parseInt(process.argv[2]);
// const num2=parseInt(process.argv[3]);
// const result=add(num1,num2);
// console.log("the addition is:",result);

const fs=require('fs');
//take input fro user
const a=parseInt(process.argv[2]);
const b=parseInt(process.argv[3]);
//adition
const result=a+b;

//object to store data
const data={
    additon:{
    operation:`${a}+${b}`,
    result:Math.add(a,b)
},
substraction:{
    operation:`${a}-${b}`,
    result:Math.sub(a,b)
}
};


//write into json file
fs.writeFileSync('add.json',JSON.stringify(data,null,2));
console.log("result store in add.json")