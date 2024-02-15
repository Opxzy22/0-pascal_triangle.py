#!/usr/bin/node
const request = require('request');

function fetchData (movieId) {
  const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

  request(url, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      const films = JSON.parse(body);
      const characters = films.characters;

      characters.forEach(charactersURL => {
        request(charactersURL, function (error, response, body) {
          if (!error && response.statusCode === 200) {
            const character = JSON.parse(body);
            console.log(character.name);
          }
        });
      });
    }
  });
}
const movieId = process.argv[2];
fetchData(movieId);
