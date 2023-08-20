const qr = require("qrcode");
const readline = require("readline-sync");
const { exec } = require('child_process');
const path = require('path');
process.chdir(__dirname);

console.log("Enter the link:");
const link = readline.prompt();

qr.toFile("qr.png", link, function(err) {
    if (err) {
        return console.log(err);
    }
    console.log("QR code created!");
    const qrFilePath = path.join(__dirname, 'qr.png');
    const openCommand = process.platform === 'win32' ? 'explorer' : 'open';
    exec(`${openCommand} "${qrFilePath}"`, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("QR code opened!");
        readline.question('Press any key to exit...');
    });
});