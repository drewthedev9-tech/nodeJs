//  Restful Apis allow for compatability between different systems.
//  - a way to define our server and how it can provide it.
//  Uses Get = recive a resource.
//  PUT to change the state or update a resource.
//  POST that creates a resource.
//  DELETE to remove the resource.

// Restfuil APIS are stateless = calls can be made independent of one another.

const express = require ('express');

const bodyParser = require('body-parser');
const app = express();

// app.use(bodyParser.urlencoded({extended:false}))
// // used to send json files.
// app.use(bodyParser.json());


// app.get('/:id', (req,res)=>{
//     res.send('Getting Profile');
    
//     // console.log(req.query);
//     // req.body

//     // // for adding headers
//     // console.log(req.headers)

//     // gets the params of the URL header have to put the params like so above
//     // in the function
//     // app.get('/:id',(req,res)=>{});
//     console.log(req.params)

// })


// linked upto the public file and ran the index.html in there.
// __dirname = current directory -> then to public.
app.use(express.static(__dirname + '/public'));

app.listen(3000);


