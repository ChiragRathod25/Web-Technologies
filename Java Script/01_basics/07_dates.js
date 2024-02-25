//Teemporal(API) object rules in pipline mode
let myDate=new Date()
console.log(myDate)
console.log(myDate.toString());     //show all info including timezone
console.log(myDate.toDateString()) //show date,mon,year,day of week
console.log(myDate.toISOString()) //show into ISOS formate
console.log(myDate.toJSON())     //it can be used for JSON.stringyfy methos
console.log(myDate.toLocaleDateString()) //show into dd/mm/yyyy formate
console.log(myDate.toTimeString())      //show time and timezone
console.log(myDate.toUTCString())       //show date,mon,year,day of week with timezone

console.log(typeof myDate)

//declaration of specific date
let myNewDate=new Date(2024,1,12)
console.log(myNewDate.toDateString())

let myNewDate2=new Date(2024,1,12,5,1) //declaration include time
console.log(myNewDate2.toLocaleString())

let myNewDate3=new Date("25-10-2004")
console.log(myNewDate3.toLocaleDateString())

let myTimeStamp=Date.now()
console.log(myTimeStamp)    //give current date
console.log(myDate.getTime())  //calculate time into mili second from declaration
console.log(Date.now()) //give ms from 1 jan,1970
console.log(Math.floor(Date.now()/1000)) //converted to second from ms

let newDate4=new Date()
console.log(newDate4)
console.log(newDate4.getMonth()+1) //because calculation of month starts from 0
console.log(newDate4.getDate())

newDate4.toLocaleString('default',{
    weekday:"long",
}) //Explore this from documentation