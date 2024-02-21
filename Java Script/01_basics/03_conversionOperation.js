let age="19" //take "19" as first example
let age1="19abc" 
let age2=null 
let age3=undefined
let age4=true 
console.log(typeof age)
console.log(typeof (age)) //both are same

let valueInNumber=Number(age) //age(string) is converted into number
console.log(typeof valueInNumber)
console.log(age+" "+valueInNumber)

let valueInNumber1=Number(age1) 
console.log(typeof valueInNumber1)
console.log(age1+" "+valueInNumber1)

let valueInNumber2=Number(age2) 
console.log(typeof valueInNumber2)
console.log(age2+" "+valueInNumber2)

let valueInNumber3=Number(age3) 
console.log(typeof valueInNumber3)
console.log(age3+" "+valueInNumber3)
 
let valueInNumber4=Number(age4) 
console.log(typeof valueInNumber4)
console.log(age4+" "+valueInNumber4)  //0 for false

// --Short Notes--  Number Conversion
//33-> 33
//33abc => NaN
//ture => 1 ; false =>0
//null =>0
// undefiner =>NaN

let isLoggedIn=1;
let booleanLoggedIn=Boolean(isLoggedIn)
console.log(booleanLoggedIn)

// --Short Notes-- Boolean Conversion
// 1=> true
// 0=>false
// ""=> false
// "Chirag"=>true

let sumNumber=37
let stringNumber=String(sumNumber)
console.log(stringNumber)
console.log(typeof stringNumber)