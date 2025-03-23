'use strict';

const numbers = [];

for (let i = 1; i < 6; i++) {
  const num = +prompt(`Enter Number ${i}: `);
  numbers.push(num);
}

console.log(`Numbers: ${numbers}`);

const search = +prompt('Enter a number to search: ');

if (numbers.includes(search)) {
  console.log(`Number ${search} is found in the array.`);
} else {
  console.log(`Number ${search} is not found in the array.`);
}

numbers.pop();

console.log(`Updated array: ${numbers}`);

console.log(`Sorted numbers: ${numbers.sort((a, b) => a - b)}`);
