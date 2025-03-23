'use strict';

const point1 = prompt(
  'Enter x,y coordinates for point 1 (separated by space):'
);

const point2 = prompt(
  'Enter x,y coordinates for point 2 (separated by space):'
);

const xy1 = point1.split(' ');
const xy2 = point2.split(' ');

const dist = Math.sqrt(
  Math.pow(parseFloat(xy2[0]) - parseFloat(xy1[0]), 2) +
    Math.pow(parseFloat(xy2[1]) - parseFloat(xy1[1]), 2)
);

document.querySelector(
  '#result'
).innerHTML = `The distance between point 1 (${xy1[0]},${xy1[1]}) and point 2 (${xy2[0]},${xy2[1]}) is ${dist}`;
