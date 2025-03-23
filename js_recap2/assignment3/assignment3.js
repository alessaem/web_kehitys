'use strict';

const numbers = [];

let done = false;

while (!done) {
  const num = prompt("Enter a number (or 'x' to finish): ");
  if (num === 'x') {
    done = true;
  } else {
    numbers.push(parseInt(num));
  }
}

const evenNumbers = (arr) => {
  const result = [];
  let count = 0;
  for (let num of arr) {
    if (num % 2 == 0) {
      result.push(num);
      count++;
    }
  }
  if (count === 0) {
    return 'None';
  } else {
    return result.toString();
  }
};

document.querySelector('#result').innerHTML = `Even numbers: ${evenNumbers(
  numbers
)}`;
