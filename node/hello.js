// console.log("hello");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'html');
  // res.end('Hello i am 1 prerna');
  res.end(`<!DOCTYPE html>
  <html>
  <title>Table</title>
  
  <head>
    <style>
      table,tr,th,td {
        border:2px solid black;
        border-collapse:collapse;
        padding: 10px;
        border-spacing: 5px;
      }
      th{
        background-color: rgb(240, 127, 14);
      }
      tr{
        background-color: lightblue;
      }
      td{
        color: rgb(59, 20, 231);
        font-size: bold;
      }
    </style>
  </head>
  
  <body>
    <table class="tab">
  
      <tr>
        <th Colspan="6">STUDENT TABLE</th>
      </tr>
      <tr>
        <th rowspan="7"> CR'S</th>
      </tr>
      <tr>
        <th>Name</th>
        <th>Roll.no</th>
        <th>Department</th>
        <th>Grade</th>
        <th>Submission</th>>
      </tr>
      <tr>
        <td>Prerna</td>
        <td>SS19CO001</td>
        <td>Computer</td>
        <td>A+</td>
        <td>Done</td>
  
      </tr>
      <tr>
        <td>Yashodhar</td>
        <td>SS19CO002</td>
        <td>Computer</td>
        <td>A</td>
        <td>Done</td>
      </tr>
  
      <tr>
        <td>Abhishek</td>
        <td>SS19CO003</td>
        <td>Computer</td>
        <td>B</td>
        <td>Done</td>
  
  
      </tr>
      <tr>
        <td>sneha</td>
        <td>SS19CO004</td>
        <td>Computer</td>
        <td>C</td>
        <td>Not Done</td>
  
  
      </tr>
      <tr>
        <td>Rohan</td>
        <td>SS19CO005</td>
        <td>Computer</td>
        <td>b</td>
        <td>late Done</td>
  
  
      </tr>
  
  
    </table>
  </body>
  
  </html>`);

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});