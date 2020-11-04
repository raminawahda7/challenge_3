const express = require('express');
const app = express();
const port = 5000; // To avoid conflict because react running os the same port number.
app.use(express.static(__dirname + '/public')); // server.js and components are in the same folder

app.get('/app',(req,res)=>{
res.end('Hello challenge 3');
})

app.post('/',(req,res)=>{
var data = req.body;
console.log(data);
})

app.listen(port,()=>{console.log(`Example app listening on localhost:${port}`)})
