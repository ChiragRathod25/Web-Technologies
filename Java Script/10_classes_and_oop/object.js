function multiply(n){
    return n*5;
}
multiply.power=2
console.log(multiply(5))
console.log(multiply.power) //2
console.log(multiply.prototype) // {}

// function is function and it is also Object, we can access obj properties for function
// it is technically reference to object 

function createUser(username,score){
    this.username=username;
    this.score=score;
}
// add function to prototype of function 
createUser.prototype.increment=function (){
    // score++;
    this.score++;  //this keyword is must
}
createUser.prototype.printMe=function(){
    console.log(`Score is ${this.score}`)
}

const chai=new createUser("chai",25) //new is must required because it adds defined protoype to chai
const tea=new createUser("tea",250)
console.log(chai)
console.log(tea)
chai.increment();
tea.increment();
chai.printMe()
tea.printMe()

/*
-- notes --

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/