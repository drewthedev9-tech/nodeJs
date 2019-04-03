// in just 3 lines you have a server with express.

const express = require ('express');

const app = express();

// get is the request method.
app.get('/', (req,res)=>{
    const user = {
        name: 'Sally',
        hobby: 'soccer'
    }
    
    res.send(user);
})
app.listen(3000);