function setUsername(username){
    //complex DB calls
    this.username=username
    
}
function createUser(username,email,password){
    // setUsername(username), //username is not set into object

    setUsername.call(this,username),
    
    this.email=email,
    this.password=password
}
const chai=new createUser("chirag","chiku@gmail.com","ABC")
console.log(chai) 