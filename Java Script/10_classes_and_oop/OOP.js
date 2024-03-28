const user={
    username:'chirag',
    loginCount:8,
    signedIn:true,
    getUserDetails:function(){
        // return user.username
        // console.log(this); // it will give user obj
        // console.log(username)  //we have to use this keyword, it will give error
        console.log(this.username) //correct
    }
}
// console.log(this); // {} -> node environment, window  -> Browser environment
// console.log(user.getUserDetails())


function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    // return this; // it is already implicitely injected
}

const userOne=new User("Chirag",12,true);
const userTwo=new User("mansi",21,false);
console.log(userOne)
console.log(userTwo)
// console.log(userOne.constructor)

// instanceof - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof