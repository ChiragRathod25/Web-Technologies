// singleton
//when we declare like leteral not singleton
// if with constructor then singleton

// Object.create()// declare object with constructor


const mySym=Symbol("key1") //symbol declaration
const mySym2=Symbol("key2") //symbol declaration

const jsUser={ 
    //keys and value declaration
    name:"Chirag",
    age:19,
    "my location":"Anand",
    email:"chirag@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Tuesday"],

    mySym:"My symbol", //it will declare mySym string not using of previously declared Symbol 
    [mySym2]:"My symbol two", //now we are refering previously declared symbol, using symbol as key


}
console.log(jsUser.name)
console.log(jsUser["name"]) //prefered way to access data member of object
// console.log(jsUser."my location") //it will give error
console.log(jsUser["my location"])

console.log( jsUser.mySym)
console.log(typeof jsUser.mySym)
console.log(jsUser[mySym2])
console.log(typeof jsUser[mySym2])
console.log(jsUser)

jsUser.email="chiku@jethalal.com"
console.log(jsUser["email"])
// Object.freeze(jsUser) // here it will freeze my jsUser object, we can't edit it
jsUser.email="chiku@chirag.com"
console.log(jsUser["email"])


jsUser.greeting=function (){
    console.log("Happy b'day JS !!");
}
console.log(jsUser.greeting);
console.log(jsUser.greeting());

jsUser.greeting2=function (){
    console.log(`Happy b'day, ${this.name}`);
}
// console.log(jsUser.greeting2);
// console.log(jsUser.greeting2());