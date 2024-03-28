console.log(Math.PI)

const descriptor=Object.getOwnPropertyDescriptor(Math,'PI')
console.log(descriptor)

const myobj=Object.create(null)
myobj.name="Ginger Chai"
myobj.price=250
myobj.isAvailable=true
myobj.order=function(){
    console.log("ordered Successfully")
}
// console.log(myobj)
console.log(Object.getOwnPropertyDescriptor(myobj,"name"))
for (let [key,value] of Object.entries(myobj)) {
    if(typeof value!=='function'){
        console.log(`${key} : ${value}`)
    }
}

//now i set name's property enumerable:false, so after that i'm not able to iterate name in loop
Object.defineProperty(myobj,'name',{
    writable:false,
    enumerable:false
}) 

console.log(Object.getOwnPropertyDescriptor(myobj,"name"))
for (let [key,value] of Object.entries(myobj)) {
    if(typeof value!=='function'){
        console.log(`${key} : ${value}`) //name is not here, because for name enumerable:false
    }
}