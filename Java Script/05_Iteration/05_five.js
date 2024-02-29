const coding=["JS","CSS","CPP","Python"]
// coding.forEach( function (val){console.log(val)} )
// call back doesn't have name
//here we written call back in bracket

coding.forEach((item)=>{
    // console.log(item);
})

function printMe(item){
    // console.log(item)
}
coding.forEach(printMe) //separate function declaration

coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
})  //for each can access differenct values like index,arr

const myCoding=[
    {
        languageName:"JavaScript",
        languageFileName:"js"
    },
    {
        languageName:"C++",
        languageFileName:"cpp"
    },
    {
        languageName:"Python",
        languageFileName:"py"
    }
]
myCoding.forEach((item) => {
    console.log(item.languageName)
});

