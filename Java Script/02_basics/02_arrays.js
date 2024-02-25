const heroes=["Ironman","wanda","Spiderman"]
const guardians=["gamora","groot"]
const sguard=["Odin","thor","loki","hela"]
heroes.push(guardians)  //it will add array as element
console.log(heroes)
console.log(heroes.length)
console.log(heroes[3])
console.log(heroes[3][1])

//const combines two arrays and return a new array
const gguard=guardians.concat(sguard)
console.log(gguard)

//spread operator - to concate two array -prefered because it is usefull for cancatination of 3 or more array
const all_heros=[...guardians,...sguard]
console.log(all_heros)

const anotherArray=[432,764,2,7,3,[52,"bfg",'d','a'],65,23,65,[[3,1,5],6,1,5,[43,13,32]]]
console.log(anotherArray)
const new_another_array=anotherArray.flat(Infinity) //in beacket we have to specify depth to remove nested array
console.log(new_another_array)

console.log(Array.isArray("Chirag")) //to checko something is array or not
console.log(Array.from("Chirag")) //make array from given
console.log(Array.from({name: "Chirag"}))  

let score1=100
let score2=200
let score3=300
console.log((Array.of(score1,score2,score3 )))