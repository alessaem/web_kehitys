'use strict';

const movies = [];

const movieCount = +prompt('How many movies do you want to rate?');

for (let i = 0; i < movieCount; i++) {
  const title = prompt(`Enter the ${i + 1}. movies title:`);
  const rating = parseFloat(prompt(`Enter the ${i + 1}. movies rating:`));

  const movie = {title: title, rating: rating};
  movies.push(movie);
}

const sorted = movies.sort((a, b) => b.rating - a.rating);

function showList(movieList, div) {
  const list = document.createElement('ul');
  movieList.forEach((element) => {
    let li = document.createElement('li');
    let text = document.createTextNode(
      `Title: ${element.title}, rating: ${element.rating}`
    );
    li.appendChild(text);
    list.appendChild(li);
  });

  div.appendChild(list);
}

const result = document.querySelector('#result');

const bestMovieText = document.createTextNode(
  `Best rated movie is ${sorted[0].title} with rating ${sorted[0].rating}`
);

result.appendChild(bestMovieText);

showList(sorted, result);
