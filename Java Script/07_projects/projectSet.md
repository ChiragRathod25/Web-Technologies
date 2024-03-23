# Projects JavaScript
## Project Link
stackbiltz : [click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)  

## Project 1 - Background Color Change
```Javascript
let boxes = document.querySelectorAll('span');
boxes.forEach((box) => {
  box.addEventListener('click', function () {
    document.body.style.backgroundColor = box.getAttribute('id');
    console.log('clicked');
  });
});
```

## Project 2 - BMI Calculator
```Javascript
let form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  const height = parseInt(document.getElementById('height').value);
  const weight = parseInt(document.getElementById('weight').value);
  let result = document.querySelector('#results');
  if (height <= 0 || height === '' || isNaN(height)) {
    alert('Please Enter Valid Height');
    // result.innerHTML = ``;
  } else if (weight <= 0 || weight === '' || isNaN(weight)) {
    // result.innerHTML = ``;
    alert(`Please Enter Valid Weight`);
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
  }
  event.preventDefault();
});
```

## Project 3 - Digital Clock
```javascript
let clock = document.getElementById('clock');
let date;
setInterval(function () {
  date = new Date();
  clock.innerHTML = `${date.toLocaleTimeString()}`;
}, 1000);
```

## Project 4 - Guess the Number
```Javascript
let count = 10;
let answer = Math.floor(Math.random() * 100);
let guessField = document.querySelector('.guessField');
let lowOrHi=document.querySelector('.lowOrHi');

let guesses = document.querySelector('.guesses');
let form = document.querySelector('.form');
let lastResult=document.querySelector('.lastResult')
function reset() {
  guessField.innerHTML=""
  lowOrHi.innerHTML=""
  guesses.innerHTML=""
  answer = Math.floor(Math.random() * 100);
  count = 10;
  lastResult.innerHTML=`${count}`
}

form.addEventListener('submit', (event) => {
  if (guessField.value > answer) {
    lowOrHi.innerHTML=`Less than previous guess`;
  } else if (guessField.value < answer) {
    lowOrHi.innerHTML=`More than previous guess`;
  } else {
    lowOrHi.innerHTML=`Hurray !! \ncorrect Guess: ${guessField.value}`;
    alert(`Hurray !! Correct Guess \n correct Guess: ${guessField.value}`);
    let restart=confirm('Do you want to restart the game?');
    if(restart){
      reset();
    }
  }
  guesses.innerHTML+=`${guessField.value} ,`;
  event.preventDefault();
  count--;
  lastResult.innerHTML=`${count}`
  if (count <= 0) {
    lowOrHi.innerHTML=`correct Guess: ${answer}`;
    let restart=confirm('Do you want to restart the game?');
    if(restart){
      reset();
    }
  }
});
```
