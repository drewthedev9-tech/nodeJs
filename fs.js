// can accessour file system.
const fs = require('fs');


// fs moule ha readFile method -> will read the hello.txt file.
fs.readFile('./hello,txt', (err, data)=>{
    if (err){
        console.log('errrorrrr')
    }
    console.log(data);
})