const fs = require('fs');
//  1 
//  what floordoes santa end up on ?
//  ( -> santa goes up
//  ) -> santa goes dpwn one floor.)

function question1(){
fs.readFile('./santa.txt', (err, data)=>{
    // see time to excecute code 
    console.time('santa-time');
    const directions = data.toString();
    
    //  split the "()" up with the [;it split function"
     const directionsArray = directions.split('');
    const answer = directionsArray.reduce((acc, currentValue)=>{
        if (currentValue === '('){
            return acc += 1
        } else if (currentValue ===')'){
            return acc -= 1
        } 

        }, 0)
        // see ttime to excecute finosehes here.
        console.timeEnd('santa-time')
        console.log('floor:',answer)
    })
}

question1();

//  When does santa enter basement ?
    
function question2() {
    fs.readFile('./santa.txt', (err, data)=>{
        const directions = data.toString();
        const directionsArray = directions.split('');
        const answer = directionArray.some((currentValue))
    })
}