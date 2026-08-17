const { log } = require('console');
const os = require('os');
const path = require('path');
const fs = require('fs');
const crypto =  require('crypto');
const process = require('process');
const dns = require('dns');
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus().length);
// console.log(os.homedir());
// console.log(os.totalmem()/(1024*1024*1024) + ' GB');
// console.log(os.freemem()/(1024*1024) + ' MB');

// const filePath = path.resolve(__dirname, "core_module.js");
// console.log(filePath);
// console.log(__dirname);

// const file = "sem 3/lec 5/core_module.js";
// console.log(path.basename(file)); //filename
// console.log(path.extname(file)); //js
// console.log(path.dirname(file)); //lec 5

// const data = fs.readFileSync('sample.txt', 'utf-8'); //synchronous
// console.log(data);

// fs.readFile('sample.txt', 'utf-8', (err, data) => { //asynchronous
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// fs.writeFileSync("sample.txt", "Hello, sanchita")

// fs.appendFileSync("./sample.txt", "\nNew content")/

// fs.unlinkSync("./file.txt")

// fs.renameSync("./sample.txt", "newfile.txt")

// fs.copyFileSync("./newfile.txt", "./copyfile.txt")

// const password = "1234567890"

// const salt=crypto.randomBytes(16).toString("hex");

// const hash = crypto.createHash("sha512",salt).update(password).digest("hex");
// console.log(hash)

// dns.lookup("www.google.com", (err, address, family) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(address);
//         console.log(family);
//     }
// })

// dns.reverse("8.8.8.8", (err, hostnames) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(hostnames);
//     }
// })

const data=process.argv;
console.log(data[2],data[3])