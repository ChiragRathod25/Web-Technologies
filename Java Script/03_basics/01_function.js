function sayMyName(){
    console.log("Chirag")
}
sayMyName
// sayMyName();

function addTwoNumber(number1,number2){
    return number1+number2;
}

const result=addTwoNumber(3,5)
// console.log("Result : ",result);

function logInMessage(username="Chiku"){ //assigning default value
    // if(username===undefined){
    if(!username){
        console.log("please enter username")
        return 
    }
    return `${username} just logged in`
}
// console.log(logInMessage())
// console.log(logInMessage("Chirag"))


function calculateCartPrice(val1,val2,...num){  // ... is rest operator
    return num;
}
// here 200 and 400 goes to val1 and val2 respectively and we returned from 800
console.log(calculateCartPrice(200,400,800,789,321,543,432))

const user={
    username:"ChiragRathod25",
    age:19
}
function handelObject(anyObject){
    console.log(`usename is ${anyObject.username} and age is ${anyObject.age}`)
}
handelObject(user)
handelObject({
    username:"Mahek",
    age:20
})

const myNewArray=[100,300,100,321]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(myNewArray)
console.log(returnSecondValue(myNewArray))