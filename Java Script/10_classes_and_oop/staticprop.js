class user{
    static a=1;
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){
        return this.a++;
    }
}
const hitesh=new user("hitesh")
// console.log(hitesh.createId())  //not possible
console.log(hitesh);
console.log(user.createId());
console.log(user.createId());


class Teacher extends user {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe();
// console.log(iphone.createId());  //static stops method to be inheritance