//Memories in Java Script

// Stack(Primitive), Heap(Non-Primitive)

let myName="Chirag"
let myPyaraName=myName
myPyaraName="Chiku"

console.log(myName)
console.log(myPyaraName)

let userOne={
    email:"user@google.com",
    age:19,
}
let userTwo=userOne
userTwo.email="new@google.com" //here it will update both becase of non primitive data type , because both are pointing at same memory location
console.log(userOne)
console.log(userTwo)