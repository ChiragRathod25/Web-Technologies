//primitive and non primitive - types are based on how data is stored in the system

//----- primitive Data Types -----
//Copy of variable is passed as parameter
//7 Types : String,  Number, Boolean, null, undefined, Symbol, BigInt

//Reference Type ----
//reference of memory location is passed
// Array, Object, Function

//JavaScript is Dynamically typed language - data type of variable is defined by the value they hold
// const score=100 //JS Syntax
// const score:number=100 //typescript syntax - statically typed language

//Symbol Example
const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id==anotherid)

//bigint
const bigNumber=43273124849783124831273424325432434234424234324234n
console.log(typeof bigNumber)  // here n at last convert it to bigint from number

//Array
const hero=["Ironman","Wanda"]

//object
let myObj={
    name:"Chirag",
    age:19,
}

//function
const myFunction=function hi(){
    console.log("Hello! Chirag")
}
console.log(typeof myFunction) //it's type of function object