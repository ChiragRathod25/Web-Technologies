const score=400 //here data type is given by JS
// console.log(score) 

const balance=new Number(100) //define data type to balance(number)
// console.log(balance)
// console.log(balance.toString().length) //it is converted into string and can access methods of string
// console.log(balance.toFixed(2)) //for precision-value after point (.)

const otherNumber=2223.43212343
// console.log(otherNumber.toPrecision(3)) //total output number (before+after)

const hundreds=1000000
// console.log(hundreds.toLocaleString()) //1,000,000
// console.log(hundreds.toLocaleString('en-IN')) //10,00,000


// +++++++++++++MATHS+++++++++++++++
console.log(Math)
// console.log(Math.abs(-4)) //convert all type of number to positive numbber
// console.log(Math.round(4.2)) //round off
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.2))
// console.log(Math.min(3,6,2,5,2,321))
// console.log(Math.max(3,6,2,5,2,0))

console.log(Math.random()) //default it always give random valur between 1 and 0
console.log(Math.random()*10)  //between 0 and 10
console.log((Math.random()*10)+1)  //here we +1 to avoid zero(0)
console.log(Math.floor(Math.random()*10)+1)  //here we +1 to avoid zero(0)

const min=10
const max=20
// (Math.random()*(max-min+1))+min  //get value between 10 to 20
console.log(Math.floor(Math.random()*(max-min+1))+min)