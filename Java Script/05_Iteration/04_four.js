//for in loop is used for object,array-different syntax not for map
const myObject={
    game1:"NFS",
    game2:"spiderman",
    game3:"BGMI"
}
for (const key in myObject) {
    // console.log(`${key} is ${myObject[key]}`)
    // console.log(myObject[key])
}

const programing=["js","cpp","python"]
for (const key in programing) {
    // console.log(key) //it will give key/index
    // console.log(programing[key]) //it will give value of key/index
    //there i syntax difference between forIn and forOf loop for array,map
}
const map=new Map()
map.set('In',"India")
map.set('USA',"United state of America")
map.set('UK',"United Kingdom")
for (const key in map) {
    console.log(map[key]) //both will not give any output
    console.log(key)
}
