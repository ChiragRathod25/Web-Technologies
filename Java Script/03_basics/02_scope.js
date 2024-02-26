// var c=300
let a = 300
if (true) {
    let a = 10
    const b = 29
    var c = 21
    // console.log("INNER  :",a)
}

// console.log("GLOBAL :",a)
//  //console.log(b)
// console.log(c)

///nested function
// child can access parents variable
function one() {
    const username = "Chirag"
    function two() {
        const website = "youtube"
        console.log(username)
    }
    //console.log(website) //we can't access website from outside block of two function
    two()
}
// one()


//another example
if(true){
    const username="Chirag"
    if(username=="Chirag"){
        const website="youtube"
        console.log(username+website)
    }
    // console.log(website)
}
// console.log(username)

//+++++++++ interesting +++++++++++//
console.log(addOne(3))
function addOne(value){
    return value+1;
}
console.log(addOne(3))

// console.log(addTwo(3)) // it will give error , because function is declared as expression, and return value stored into variable ==>we can't use expression function declaration before proper declaration of function
const addTwo=function(num){
    return num+2
}
console.log(addTwo(3))
