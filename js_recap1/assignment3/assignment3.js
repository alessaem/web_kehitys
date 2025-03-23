'use strict';
const side1 = +prompt('Enter side 1: ');
const side2 = +prompt('Enter side 2: ');
const side3 = +prompt('Enter side 3: ');

const compare = (num1, num2, num3) => {
  const result = document.querySelector('#result');
  if (num1 > 0 && num2 > 0 && num3 > 0) {
    if (num1 == num2 && num2 == num3) {
      result.innerHTML = 'triangle is equilateral';
    } else if (num1 == num2 || num1 == num3 || num2 == num3) {
      result.innerHTML = 'triangle is isosceles';
    } else {
      result.innerHTML = 'triangle is scalene';
    }
  } else {
    result.innerHTML = 'invalid input';
  }
};

compare(side1, side2, side3);
