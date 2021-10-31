// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: fs.createReadStream('./ladybug.txt'),
    crlfDelay: Infinity
});
let line_no = 0;
rl.on('line', function(line) {
    line_no++;
    console.log(line);
});
// end
rl.on('close', function(line) {
console.log('Total lines : ' + line_no);
});