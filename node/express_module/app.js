const express = require("express");
const path = require("path");
const fs = require('fs');
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));//for serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug')// Set the template engine as pug
app.set('views', path.join(__dirname, 'views'))// Set the views directory

//ENDPOINTS
app.get('/', (req, res)=>{
    const con = "This is a very best document ";
    const pass = {'title':'This is my 1st document', 'contant':con};
    res.status(200).render('index.pug',pass);
})

app.post('/', (req,res)=>{
    Name = req.body.Name;
    age = req.body.age; 
    gender = req.body.gender;
    email = req.body.email;
    text= req.body.text;

    let info = `
    Name = ${Name}
    Age = ${age} 
    Gender = ${gender}
    Email = ${email}
    More about cilent = ${text}`

    fs.writeFileSync('output.txt',info)
   
    const pass = {'meassage':'U r form is Submitted Sucssefully!'};
    res.status(200).render('index.pug',pass);

})


//START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
 