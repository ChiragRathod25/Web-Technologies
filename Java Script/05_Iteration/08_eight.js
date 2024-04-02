const array1=[1,2,3,4]
//1+2+3+4
const initialValue=0
// const sumWithInitial=array1.reduce(
    // (accumulator,currentValue)=>accumulator+currentValue,initialValue)

//using function
const sumWithInitial=array1.reduce(
  function(acc,currVal){
    console.log(`acc:${acc} and currVal:${currVal}`)
    return acc+currVal
  },0)  //value after , assigned to acc

console.log(sumWithInitial)

const courses=[
    {
        courseName:"JS Tutorial",
        price:799
    },
    {
        courseName:"CPP Tutorial",
        price:1799
    },
    {
        courseName:" Tutorial",
        price:299
    },
]
const total_price=courses.reduce((acc,item)=>acc+item.price,0);
console.log(`Total price to pay : ${total_price}`)