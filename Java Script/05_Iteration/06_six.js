const coding = ["JS", "CSS", "CPP", "Python"]

coding.forEach((item) => {
    console.log(item);
})

// const values=coding.forEach((item)=>{
// console.log(item);
// })
// console.log (values) //undefined

// const values2=coding.forEach((item)=>{
// console.log(item);
// return item
// })
// console.log (values2) //undefined

// ----------
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter((num) => num > 5) //it takes call back and return when condition is satisfiesd
const newNums2 = myNums.filter((num) => {
    return num > 5
}) //it takes call back and return when condition is satisfiesd

// console.log(newNums)
// console.log(newNums2)

// using forEach
const newNumber=[]
myNums.forEach((num)=>{
    if(num>5){
        newNumber.push(num)
    }
})
console.log(newNumber)

//example

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
const userBook=books.filter((bk)=>{
    if(bk.genre==='History'&&bk.publish>-1995){
        return bk.title;
    }
})
console.log(userBook)