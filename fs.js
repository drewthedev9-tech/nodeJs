// can accessour file system.
const fs = require('fs');


// fs moule ha readFile method -> will read the hello.txt file.
// if you reading a file for texts and anything for express. 
// doesnt block the excecution
fs.readFile('./hello.txt', (err, data)=>{
    if (err){
        console.log('errrorrrr');
    }
    // toString takes the utf8 parmeter by default. does all numbers and languages.
    //  ig you want to use utf8 use quotes 'utf8'.
    console.log('async', data.toString());
})

//  File synce makes other stuff wait then readfile goes.
const file = fs.readFileSync('./hello.txt');
console.log('sync',file.toString());


//appends text to the hello.txt file.
// fs.appendFile('./hello.txt', ' hows things going?', err => {
//     if (err){
//         console.log('error')
//     }
// })

// WRITE and adds a file with text in it

fs.writeFile('bye.txt', 'sad to see you go!', err =>{
    if (err){
        consol1.log(err)
    }
})


// delete the files you want.
fs.unlink('./bye.txt', err =>{
    if (err){
        console.log(err)
    }
    console.log('bye.txt gone')
})