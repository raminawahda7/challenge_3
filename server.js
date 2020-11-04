const express = require('express');
const app = express();
const port = 5000; // To avoid conflict because react running os the same port number.
app.use(express.static(__dirname + '/public')); // server.js and components are in the same folder

// const App = require ('./client/App.jsx')

app.get('/',(req,res)=>{
res.end('Hello challenge 3');
})

app.listen(port,()=>{console.log(`Example app listening on localhost:${port}`)})

// console.log(path.join(__dirname, '/dist/components'))


///////////
// ReactDOM.render(<App/>, document.querySelector("#app"));
///////////