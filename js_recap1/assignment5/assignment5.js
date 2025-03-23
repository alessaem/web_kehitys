'use strict';

const sum = (num) => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }

  return sum;
};

const end = +prompt('Enter a positive integer: ');

document.querySelector(
  '#result'
).innerHTML = `Sum of all the natural numbers up to and including number ${end}: ${sum(
  end
)}`;
