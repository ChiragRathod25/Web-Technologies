const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums=myNumbers.map((num)=>num*num)

const newNums = myNumbers
            .map((num) => num * 10) //multiply each number with 10
            .map((num) => num + 1)  //increse value given by above map by 1
            .filter((num)=>num>=40) //take only that values which is greater than 40
console.log(newNums)

