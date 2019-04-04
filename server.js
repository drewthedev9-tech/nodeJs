// in just 3 lines you have a server with express.

const express = require ('express');

const app = express();

// npm i body-parser
const bodyParser = require('body-parser');


//  test out your server before you connect it to you frot end.
// ////// Thsi swhole thing could be used for sending and updating teh database 
//  sending respinses to the server.

// middleware to use body parser with express.
// encoded being the part in postman under POST, Body , xxx-format.
app.use(bodyParser.urlencoded({extended:false}))
// used to send json files.
app.use(bodyParser.json());
// different methods to check with postman.
// get request.
// the / is the localhost:3000
app.get('/', (req,res)=>{
    res.send('Getting Profile');
})

//  for form data if you were handling data from a form.
// Post request:
app.post('/profile', (req,res)=>{

    // logging teh changes of form-data in postman.
    console.log(req.body)
    const user = {
        name: 'Sally',
        hobby: 'Soccer'
    }
    res.send(user);
})
app.listen(3000);