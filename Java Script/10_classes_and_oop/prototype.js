let myName="chirag   "
console.log(myName.length)  //it count whitespace
console.log(myName.trim().length); // it another alternative
// console.log(myName.truelength) // we'll define this which gives me same result asmyName.trim().length

let myHeros=["thor","spiderman"]
let heroPower={
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}
// heroPower.chirag() //we'll define this to all obj

// we accessed object and added property into object prototype 
Object.prototype.chirag=function(){
    console.log("chirag is present in all object")
}
heroPower.chirag()
myHeros.chirag()


// Example of Inheritance prototype in Javascript 
Array.prototype.arrayChirag=function(){
    console.log("Hii, Chirag")
}
myHeros.arrayChirag()  // added prototype to array
// heroPower.arrayChirag()  //it doesn't have access to arrayChirag() , because we added that prototype into array's prototype



//Inheritance

const User={
    name:"coffee",
    email:"chiku@123"
}
const Teacher={
    makeVideo:true
}
const TeachingSupport={
    isAvailable:false
}
const TASupport={
    makeAssignment:"JS Assignment",
    fullTime:true,
    __proto__:TeachingSupport // it can access prototypes of TeachingSupport
}
Teacher.__proto__=User // Teacher can access User's prototype

// modern Syntax - Syntactic sugar
Object.setPrototypeOf(TeachingSupport,Teacher)


// from line 3 question 
const userName="chiku   "
// now we inject truelength into string Object 
String.prototype.truelength=function(){
    console.log(`${this}`)
    console.log(`length is : ${this.length}`)
    console.log(`True length is : ${this.trim().length}`)
}
userName.truelength()
"chirag   Rathod    ".truelength()
"Asmita   and Chirag  ".truelength()