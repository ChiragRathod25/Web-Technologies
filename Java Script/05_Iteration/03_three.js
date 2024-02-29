// for of 
const myArray=["India","China","Brazil"]
for (const index of myArray) {
    // console.log(index);
}

const greeting ="Hello Chirag"
for(const greet of greeting){
    // console.log(`Each char is ${greet}`)
}

//Maps 
const map=new Map()
map.set('In',"India")
map.set('USA',"United state of America")
map.set('UK',"United Kingdom")

for(const key of map){
    console.log(key)
}
//printing saparate key and value of map 
for(const [key,value] of map){
    console.log(key,':-',value)
}

//for Object -- for of loop doesn't work on object
const myObject={
    game1:"NFS",
    game2:"spiderman"
}
for(const [key,value] of myObject){
    // console.log(key) //it will give error
}
//