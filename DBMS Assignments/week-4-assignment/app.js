const fs = require('fs');
const readline = require('readline');
const generateGreeting = require('./greeting');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter your name: ', (name) => {
    const greeting = generateGreeting(name);

    fs.writeFile('output.txt', greeting, (err) => {
        if (err) {
            console.error('An error occurred:', err);
            return;
        }
        console.log('Greeting saved to output.txt!');
    });

    rl.close();
});

