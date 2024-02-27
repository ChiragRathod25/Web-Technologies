const user={
    username:"Chirag",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to wensite`);
        console.log(this) //print current object
    }
}
// user.welcomeMessage()
// user.username="asmi"
// user.welcomeMessage()

// console.log(this) //it will give {} because it referes to nothing 

function chai(){
    let uname="Chirag"
    console.log(this)
    console.log(this.username) //give undefined bcs refers nothing
}
// chai()

const cofee=()=>{
    let username="hitesh"
    console.log(this)
}
cofee()


//Arrow function syntax
// ()=>{}

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }

// const addTwo=(num1,num2)=>num1+num2 //method 2 for declaration, it return's

// const addTwo=(num1,num2)=>(num1+num2)  //it returns num1+num2 , but we will not write return keyword
// if we wrap function in {} -> we have to write return keyword
// if we wrap function in () -> we will not write return keyword

const addTwo=(num1,num2)=>({username:"Chirag"})
console.log(addTwo(2,4))

// const myArray=[3,5,1,6,23]
// myArray.forEach() -- explore by self