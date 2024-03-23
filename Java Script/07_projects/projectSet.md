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

```
