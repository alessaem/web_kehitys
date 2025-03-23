'use strict';

const sortArray = (arr) => {
  return arr.sort((a, b) => a - b);
};

const numbers = [66, 4, 5, 3, 1, 9];

console.log('Original array: ', numbers);

console.log('Numbers in ascending order: ', sortArray(numbers));
