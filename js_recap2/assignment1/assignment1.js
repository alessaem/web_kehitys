'use strict';

const fruits = ['apple', 'banana', 'orange', ' grape', 'kiwi'];

console.log(`Fruits: ${fruits}`);

console.log(`Length of fruits: ${fruits.length}`);

console.log(`Element at index 2: ${fruits[2]}`);

console.log(`Last element of fruits: ${fruits[fruits.length - 1]}`);

const vegetables = [];

for (let i = 1; i < 4; i++) {
  let vegetable = prompt(`Enter ${i}. vegetable`);
  vegetables.push(vegetable);
}

console.log(`Vegetables: ${vegetables}`);

console.log(`Length of vegetables: ${vegetables.length}`);
