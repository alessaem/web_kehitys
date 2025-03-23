'use strict';

const sortArray = (arr, order) => {
  if (order === 'asc') {
    return arr.sort((a, b) => a - b);
  } else if (order === 'desc') {
    return arr.sort((a, b) => b - a);
  } else {
    return 'faulty parameter';
  }
};

const numbers = [66, 4, 5, 3, 1, 9];

console.log('Original array: ', numbers);

console.log('Numbers in ascending order: ', sortArray(numbers, 'asc'));

console.log('Numbers in descending order: ', sortArray(numbers, 'desc'));

console.log(
  'Numbers in ascending order (but with an error): ',
  sortArray(numbers, 'ascc')
);
