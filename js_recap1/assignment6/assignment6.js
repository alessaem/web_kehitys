'use strict';

const multiplication = (end) => {
  const result = [];
  let line = [];
  for (let i = 1; i <= end; i++) {
    for (let j = 1; j <= end; j++) {
      line.push(i * j);
    }
    result.push(line);
    line = [];
  }
  return result;
};

const num = +prompt('Enter a positive integer: ');

const table = document.querySelector('#table');

const tableValues = multiplication(num);

document.querySelector('#target').innerHTML = 'Multiplitation Table: \n';

for (let i = 0; i < tableValues.length; i++) {
  let tr = document.createElement('tr');
  for (let j = 0; j < tableValues[0].length; j++) {
    let td = document.createElement('td');
    td.appendChild(document.createTextNode(tableValues[i][j]));
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
