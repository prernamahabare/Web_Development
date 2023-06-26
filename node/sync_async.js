// Synchronous or blocking
// - line by line execution

// Asynchronous or non-blocking
// - line by line execution not guaranteed
// - callbacks will fire

//The code which runs via line by line execution is known as synchronous or blocking code. It means the line of code written first, will be executed first. On the other hand, a block of code where line by line execution is not guaranteed is known as asynchronous or non-blocking code. These types of codes accept a call-back function.


//In the last tutorial, we made a file to read the contents with the help of fs.readSync() function. The Sync here stands for synchronous execution.
const fs = require("fs");
fs.readFile("hello.txt", "utf-8", (err, data)=>{
    console.log(data);
});

//It allows the readFile() function to read the file completely. By the time the code is reading the file, the next block of code is executed. And when the reading is completed, it then prints the data. 
console.log("This is a message");
