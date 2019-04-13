
// common Js way of doing instead of Es6
const script2 = require ('./script2.js')

// Es6 way -> normal way
// import { largeNumber } from './script2.js';

const a = script2.largeNumber;

const b = 6;

// // setTimeout just asks when do you want this to be excecuted.
// setTimeout (()=>{
//     console.log(a + b); 
// })

// shows directory name
console.log(a + b);

// console.log(__dirname);

///////////USE from here for old server ///////////