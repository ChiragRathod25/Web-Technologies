const userEmail="Chirag"
if(userEmail){
    // console.log("have user email")
}  
else{
    console.log("Don't have email address")
}

// falsy values
// all except below are truthy values 
// false, 0 ,-0, BigInt 0n, "", null, undefined, NaN 

//truthy values
// true, "0", "false", " ", [],{},function(){}, 

// check empty array 
const userPhone=[]
if(userPhone.length===0){
    // console.log("userPhone array is empty")
}

// check empty object 
const emptyObj={}
if(Object.keys(emptyObj).length===0){
    // console.log("object is empty")
}

// //conditional
// false==0 --> true
// false=="" --> true
// 0=="" -->true

// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1=5??10
// val1=null??10 // if there is value than assign that valur to val1 else assign null

// val1=undefined??15  //same logic
val1=null??10??15 //it will asign first value
console.log(val1)

// terniary operator
// conditin ? true : false
console.log(5>2?1:0) 

const iceTeaPrice=100
iceTeaPrice<=80 ? console.log("less than 80"):console.log("more than 80")
