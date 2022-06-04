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
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    let stringSplit;
    let result;
    
    try{
        stringSplit = s.split("");
        stringSplit.reverse();
        result = stringSplit.join("");
    } catch(e) {
        console.log(e.message);
    } finally {
        result = result ? result : s;
        console.log(result);
    }
}