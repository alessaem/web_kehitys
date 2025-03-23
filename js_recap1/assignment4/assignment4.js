'use strict';

const grade = (number) => {
  let grade;
  if (number > 0 && number <= 39) {
    grade = 0;
  } else if (number > 39 && number <= 51) {
    grade = 1;
  } else if (number > 51 && number <= 63) {
    grade = 2;
  } else if (number > 63 && number <= 75) {
    grade = 3;
  } else if (number > 75 && number <= 87) {
    grade = 4;
  } else {
    grade = 5;
  }
  return grade;
};

const score = +prompt('Enter course score: ');

document.querySelector(
  '#result'
).innerHTML = `Your grade with ${score} score is: ${grade(score)}`;
