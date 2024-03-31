let color='#'
let arr=['a','b','c','d','e','f',1,2,3,4,5,6,7,8,9]
for(let i=0;i<6;i++){
  color+=arr[Math.floor(Math.random()*arr.length)]
}
console.log(color);
