'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let secondResult = ""
    for(let i=0; i<s.length; i++) {
        if(s[i].toLowerCase()=='a' | s[i].toLowerCase()=='e' | s[i].toLowerCase()=='i' | s[i].toLowerCase()=='o' | s[i].toLowerCase()=='u') {
            console.log(s[i]);
        }
        else {
            secondResult += s[i]+'\n';
        }
    }
    console.log(secondResult);
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}