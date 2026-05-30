// app.js
const fs = require('fs'); // Imported as requested
const { addNumbers } = require('./index');

// Get arguments from command line (skipping node path and script name)
const args = process.argv.slice(2);

if (args.length < 2) {
    console.log('Usage: node app.js <num1> <num2>');
} else {
    const sum = addNumbers(args[0], args[1]);
    console.log(`The sum of ${args[0]} and ${args[1]} is: ${sum}`);
    
    // Optional: Log result to a file
    fs.writeFileSync('result.txt', `Sum: ${sum}`);
}
