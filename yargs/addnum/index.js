const yargs=require('yargs')

//customize version optional
yargs.version(`16.2.0`)

//create add command
const addNumbers=(num1,num2)=>num1+num2;

//define two number to add
const number1=5;
const number2=10;

//call the function with the numbers and store the result
const sum=addNumbers(number1,number2);

//display the result in the console
console.log(`The sum of ${number1} and ${number2} is: ${sum}`);

