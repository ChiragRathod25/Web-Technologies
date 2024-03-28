// ES6 version onwards

class User{
    constructor(username,email,password){
        this.username=username,
        this.email=email,
        this.password=password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}
const chai=new User("Chai","chi@chu.com","ABC123")
console.log(chai.encryptPassword())
console.log(chai.changeUserName())


//behind the scene - ways to do same thing without using class
function UserTwo(username,email,password){
    this.username=username,
    this.email=email,
    this.password=password
}
UserTwo.prototype.encryptPassword=function(){
    return `${this.password}abc`
}
UserTwo.prototype.changeUserName=function(){
    return `${this.username.toUpperCase()}`
}
const tea=new User("tea","tea@ta.com","tea123")
console.log(tea)
console.log(tea.encryptPassword())
console.log(tea.changeUserName())