// const fs = require ("fs");
// const text = fs.readFileSync("mytext.txt", "utf-8");
// console.log(text);

const fs = require("fs");
let text = fs.readFileSync("hello.txt", "utf-8");
text = text.replace("hello", "hey");
console.log("The content of the file is")
console.log(text);


fs.writeFileSync("myfile.txt",text)