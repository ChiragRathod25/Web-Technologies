// 3 ways - Object based, property based, class based

const User={
    _email:"chi@chu.com",
    _passwprd:"abc",
    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email=value
    }
}
const tea=Object.create(User)
console.log(tea.email)  //get-set defined
console.log(tea._passwprd) //get-set not defined

// new Update 
// es6
// private proposal , we use "#" insted of "_" 