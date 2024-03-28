class User{
    constructor(email,password){
        this.email=email
        this.password=password
    } 
    // "_" add to prefix to fix conflict, racing between constructor and getter and setter
    get password(){
        return this._password.toUpperCase();
    }
    set password(value){
        this._password=value
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
}
const chiku=new User("chi@google.com","abc")
console.log(chiku)
console.log(chiku.password)
console.log(chiku.email)