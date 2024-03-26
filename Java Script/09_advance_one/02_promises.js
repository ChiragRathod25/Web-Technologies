// Q and bluebird - old libraries for js

// out first promise and syntax
const promiseOne = new Promise(function (resolve, reject) {
  //DO an async task
  //DB calls, cryptography, network
  setTimeout(() => {
    console.log("promise 1 👇");
    console.log("Async task is completed");
    resolve(); //connecting resolve, it's done always after completion of promise
  }, 1000);
});

//consumption of promise
// .then() ->directly connected to resolve
promiseOne.then(function () {
  console.log("Promise consumed");
});

//resolve .then() calling with declaration
new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("promise 2 👇");
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

//data passing to resolve
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("promise 3 👇");
    resolve({ username: "chai", email: "chai@google.com" }); //data(here object) passing to resolve
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user);
});

//resolve and reject based on conditional error
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    // let error = true;
    let error = false;
    console.log("promise 4 👇");
    if (!error) {
      resolve({
        username: "Chirag",
        email: "chiku@google.com",
        password: "ABC",
      });
    } else {
      reject("ERROR: something went wrong");
    }
  }, 1000);
});

//chaining of .then()  and error handling using .catch() and
// finally aftercompletion - either error or executes - like default
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolve or rejected"));

//aync await - It can't handle errors/reject
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    // let error = false;
    console.log("promise 5 👇");
    if (!error) {
      resolve({
        username: "Javascript",
        email: "js@google.com",
        password: "ABC",
      });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});
async function consumePromisFive() {
  //handling using try catch
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromisFive();

//get data from internet using api's
async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(response);
    // const data = response.json();
    const data = await response.json(); //responce .json takes time , so you  have to assign await
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}
getAllUsers();

//get data from internet using .then() .catch()
fetch("https://api.github.com/users/chiragrathod25")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  }).catch((error)=>{
        console.log(error)
  })
