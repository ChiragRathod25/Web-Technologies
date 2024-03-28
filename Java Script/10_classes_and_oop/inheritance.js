class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log( `Username is ${this.username}`);
    }
}
class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email;
    }
    addCourse(){
        console.log(`A New course is added by ${this.username}`);
    }
}

const tOne=new Teacher('chaman','chi@cham.com')
tOne.logMe()
tOne.addCourse();

const tTwo=new User('chandu')
// tTwo.addCourse() //not access
tTwo.logMe()

console.log(tOne===tTwo)
console.log(tTwo instanceof Teacher)
console.log(tTwo instanceof User)