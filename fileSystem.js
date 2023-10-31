const prompt = require('prompt-sync')({ sigint: true });
var ch = parseInt(prompt("Enter your Choice: "));
switch (ch) {
        case 1:
            access();
            break;
        case 2:
            open();
            break;
        case 3:
            append();
            break;
    case 4:
            read();
            break;
        case 5:
            copy();
            break;
        case 6:
            unlink();
            break;
        case 7:
            rename();
            break;
}
function access() {
        const fs = require('fs');
        const path = 'first.js';
        fs.access(path, fs.F_OK, (err) => {
            if (err) {
            console.error(err);
                return;
            }
        });
}
function read() {
        const fs = require('fs');
        fs.readFile('file.txt', (err, data) => {
            if (err) {
                return console.log('Error occurred while reading file');
            }
        console.log(data.toString());
        });
}
function append() {
        const fs = require('fs');
    fs.appendFile('file.txt', ' Hello World', (err) => {
            if (err) {
                throw err;
            }
        console.log('Updated!');
        });
}
function open() {
        const fs = require('fs');
    fs.open('file.txt', 'w', (err, file) => {
            if (err) {
                throw err;
            }
        console.log('Saved!');
        });
}
function copy() {
        const fs = require('fs');
    fs.copyFile('file.txt', 'copyfile.txt', (err) => {
            if (err) {
                throw err;
            }
        console.log('File is copied!');
        });
}
function unlink() {
        const fs = require('fs');
    fs.unlink('file.txt', (err) => {
            if (err) {
                throw err;
            }
        console.log('File deleted!');
        });
} 
function rename() {
        const fs = require('fs');
    fs.rename('file.txt', 'copyfile.txt', (err) => {
            if (err) {
                throw err;
            }
        console.log('File Renamed!');
        });
}