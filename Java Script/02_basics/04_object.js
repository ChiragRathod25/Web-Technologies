//singleton object explaination, construct object using constructor

const tinderUser=new Object()
tinderUser.id="21"
tinderUser.name="Tony"
tinderUser.isLoggedIn=false
// console.log(tinderUser)

const regularUser={
    email:"Chirag@google.com",
    fullname:{
        userfullname:{
            fname:"chirag",
            mname:"Ranjitsinh",
            lname:"Rathod"
        }
    }
}

// console.log(regularUser.fullname.userfullname.fname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
// const obj3=ob1+ob2// not allower

const obj3={obj1,obj2}   //it will work lie joining of two object
// console.log(obj3)

const obj4=Object.assign({},obj1,obj2) //it is like concate two object and output store into {} - not compulsary
// console.log(obj4)

const obj5={...obj1,...obj2} ///spread operator for concating objects
// console.log(obj5)

const user=[
    {
        id:1,
        email:"Chirag@google.com"
    }
]

// console.log(user)
// console.log(user[0].id)

// console.log(Object.keys(tinderUser)) //get all keys of object
// console.log(Object.values(tinderUser)) //get all value of object
// console.log(Object.entries(tinderUser)) //get all entries of object , array of [key,value]
// console.log(tinderUser.hasOwnProperty('fname')) //check has property or not 

// de-structuring object 
const course={
    courseName:"JS in Hindi",
    price:999,
    courseTeacher:"Hiteshbhai"
}
// console.log(course.price)

//de-structuring
const {courseName}=course
const {courseName:instructor}=course //assign new name for reference
// console.log(courseName)
// console.log(instructor)

//API
//JSON
{
    name:"Chirag";
    courseName:"JS in hindi";
    price:"free";
}