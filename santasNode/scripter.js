const fs = require('fs');
//  1 
//  what floordoes santa end up on ?
//  ( -> santa goes up
//  ) -> santa goes dpwn one floor.)

function question1(){
fs.readFile('./santa.txt', (err, data)=>{
    const directions = data.toString();
    //  split the "()" up with the [;it split function"
    const directionsArray = directions.split('');
    const answer = diretionsArray.reduce((accumulter, currentValue)=> {
        
    })
    console.log(directionsArray);
})
}
question1()

//  When does santa enter basement