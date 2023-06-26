  const http = require ('http');
const fs = require ('fs');
const fileread = fs.readFileSync('thanku.html');

const server = http.createServer((req, res) =>{
      res.writeHead(200, {'content-type':'text/html'});
      res.end(fileread);
})

server.listen(80, '127.0.0.1', () => {
    console.log("Listening on port 80");
  });