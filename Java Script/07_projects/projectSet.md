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
let clock = document.getElementById("clock");
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

## Project 5 - Keyboard

```Javascript
window.addEventListener('keydown', (event) => {
insert.innerHTML = `
<table>
  <tr>
    <td>Key</td>
    <td>Key Code</td>
    <td>Code</td>
    <td>Unicode</td>
    </tr>
    <tr>
    <td>${event.key === ' ' ? 'Spacebar' : event.key}</td>
    <td>${event.keyCode}</td>
    <td>${event.code}</td>
    <td>${event.key.charCodeAt(0)}</td>
  </tr>
</table>
`;
  event.preventDefault();
});
```

## Project 6 - Unlimited Color Bg Change

```Javascript
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const body = document.querySelector('body');
let startChanging = null;
let color;
let arr = ['a', 'b', 'c', 'd', 'e', 'f', 1, 2, 3, 4, 5, 6, 7, 8, 9];
function newColor() {
  color = '#';
  for (let i = 0; i < 6; i++) {
    color += arr[Math.floor(Math.random() * arr.length)];
  }
  return color;
}
function colorChange() {
  body.style.backgroundColor = newColor();
}

start.addEventListener('click', function () {
  if (!startChanging) {
    console.log('Started');
    startChanging = setInterval(colorChange, 1000);
  }
});

stop.addEventListener('click', function () {
  if (startChanging != undefined) {
    console.log('Stopped');
    clearInterval(startChanging);
    startChanging = null;
  }
});
```

## Project 8 - Typer

```Javascript
const typedTextSpan = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

const words = ['Love', 'Jhakaas', 'mast', 'dhinchak', 'Weird'];

function type() {}
function erase() {}
let offset = 0;
let forward = true;
let skip_count = 0;
let skip_delay = 300;
let len = words.length;
let part;
let speed = 400;
let i = 0;

const wordflik = function typeText() {
  setInterval(function () {
    if (forward) {
      if (offset >= words[i].length) {
        skip_count++;
        if ((skip_count = skip_delay)) {
          skip_count = 0;
          forward = false;
        }
      }
    } else {
      if (offset == 0) {
        forward = true;
        i++;
      }
      if (i >= len) {
        i = 0;
      }
    }
    let part = words[i].substring(0, offset);
    // console.log(i, offset);
    typedTextSpan.innerHTML = part;
    if (skip_count == 0) {
      if (forward) {
        offset++;
      } else {
        offset--;
      }
    }
  }, speed);
};

wordflik();
```

## Project 9 - Mouse circle

```Javascript
const cursor = document.querySelector('.cursor');
// an array of 10 colors in hex value
const colors = [
  '#FF6633',
  '#FFB399',
  '#FF33FF',
  '#FFFF99',
  '#00B3E6',
  '#E6B333',
  '#3366E6',
  '#999966',
  '#99FF99',
  '#B34D4D',
];
// add circle to cursor and change it's color as cursor moves on the screen. Pick color from these array
let color;
document.querySelector('html').addEventListener('mousemove', function (e) {
  cursor.style.left = e.clientX;
  cursor.style.top = e.clientY + (cursor.getAttribute('height')/ 2);
  color = colors[Math.floor(Math.random() * colors.length)];
  cursor.style.backgroundColor = color;
  // console.log(e.clientX,e.clientY,color)
});

```

## Project 10 - Emojis

```Javascript
const btn = document.querySelector('#emoji');
const emojis = [
  '😆','😅','🤣','😂','😀','🤑','🤨','🙂','😊','😗',
  '😛','😏','🤥','😴','🥺','😧','😇','😳','🙃','🥴',
  '🧐','🤨','😒','🤔','🤭','🥰','🤐','👀','🤔','🤪', '🥲','😃','😁','😬',];
btn.addEventListener('mouseover', function () {
  let random = Math.floor(Math.random() * emojis.length);
  // console.log(random)
  btn.innerHTML = emojis[random];
  random = null;
});
```
## Project 11 - Text Editor
```javascript
const inputText = document.querySelector('#input-field');
const outputField = document.querySelector('#output-field');
const btn = document.querySelectorAll('.btn');

for (let i = 0; i < btn.length; i++) {
  // console.log(btn[i]);
  btn[i].addEventListener('click', function () {
    if (inputText.value === '') {
      alert('Please, Enter text first !!');
      return;
    }
    let selectedClass = btn[i].getAttribute('class');
    // console.log(selectedClass)
    outputField.style.fontStyle = 'normal';
    outputField.style.fontWeight = 'normal';
    outputField.style.textDecoration = null;
    if (selectedClass.includes('uppercase')) {
      outputField.innerHTML = inputText.value.toUpperCase();
    } else if (selectedClass.includes('lowercase')) {
      outputField.innerHTML = inputText.value.toLowerCase();
    } else if (selectedClass.includes('capitalize')) {
      outputField.innerHTML =
        inputText.value.trim().charAt(0).toUpperCase() +
        inputText.value.trim().slice(1);
    } else if (selectedClass.includes('bold')) {
      outputField.innerHTML = inputText.value;
      outputField.style.fontWeight = 'bold';
    } else if (selectedClass.includes('italic')) {
      outputField.innerHTML = inputText.value;
      outputField.style.fontStyle = 'italic';
    } else if (selectedClass.includes('underline')) {
      outputField.innerHTML = inputText.value;
      outputField.style.textDecoration = 'underline';
    } else if (selectedClass.includes('camelCase')) {
      {
        /*
      // method 1
      // outputField.innerHTML=inputText.value;
      //here we declared array and stored into one array
      const wordsArray = new Array();
      for (let i = 0; i < inputText.value.trim().length; i++) {
        if (i === 0) {
          previosI = 0;
        }
        if (i === inputText.value.trim().length - 1) {
          wordsArray.push(inputText.value.slice(previosI, i + 1));
          break;
        }
        if (inputText.value[i] === ' ') {
          // console.log(i)
          wordsArray.push(inputText.value.slice(previosI, i));
          previosI = i + 1;
        }
      }
      // console.log(wordsArray)
      outputField.innerHTML = '';
      wordsArray.forEach(function (w) {
        outputField.innerHTML += w[0].toUpperCase() + w.slice(1);
        outputField.innerHTML += ' ';
      });*/
      }

      {
        //method 2
        const wordsArray = inputText.value.trim().split(' ');
        // console.log(wordsArray);
        outputField.innerHTML = '';
        wordsArray.forEach(function (w) {
          outputField.innerHTML += w[0].toUpperCase() + w.slice(1);
          outputField.innerHTML += ' ';
        });
      }
    }
  });
}
```