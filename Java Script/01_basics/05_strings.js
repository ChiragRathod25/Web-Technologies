const name="chirag"
const Id=37
// console.log(name+Id) //Outdated syntax
// console.log(`Hello my name is ${name} and my Id is ${Id}`) //string interpullation for concate strings and use it in statement

const gameName =new String('Chirag')  //string declaration using object, run in browser for better explaination, useful because we'll get methods
console.log(gameName)
// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(3))
// console.log(gameName.indexOf('g'))

const newString=gameName.substring(-4,4) //char at index 4 is not included, it ignore -4 and start from 0 in negative cases
console.log(newString)

const anotherString=gameName.slice(-4,4)  //start from 4 , count from last-reverse
console.log(anotherString)

const  string1="   Chirag    "
console.log(string1)
console.log(string1.trim()) //trim start and trim end is valid - read documentation

const url="https://chirag.com/chirag%20Rathod"
console.log(url.replace("%20","")) 
console.log(url.includes("CHIRAG"))

const string3="chirag-ranjitsinh-rathod"
console.log(string3.split('-')) //separate string by on '-'