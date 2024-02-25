//array -- methods from console and read it from documentation
const arr=[1,21,41,"chirag",'asmi']
console.log(arr[3])

const arr2=new Array(12,53,"chirag")
console.log(arr2[1])

arr.push("CHIRAG")
console.log(arr)
arr.pop()
console.log(arr)

arr.unshift(9) //add value at begining
console.log(arr)
arr.shift()  //remove first element
console.log(arr)

console.log(arr.includes("Chirag"))
console.log(arr.indexOf("chirag"))

const newArray=arr.join("|") //convert all erray element in string and concate all '|' separated
console.log(typeof newArray) //string datatype
console.log(newArray)
console.log(typeof arr)  //object datatype
console.log(arr)


// ----------Splice and Slice----------
console.log("Before slice :  ",arr)
const myn1=arr.slice(1,3) //it starts from 1(inclusice) to 3(exclusive) || it doesn't modify original array
console.log("Slice Array : ",myn1)
console.log("After slice : ",arr)

console.log("Before splice :  ",arr)
const myn2=arr.splice(1,3) //it starts from 1(inclusive) to 3(inclusive) and it manipulates original array
console.log("Splice Array : ",myn2) //it will remove spliced elements from parent array
console.log("After splice : ",arr)

