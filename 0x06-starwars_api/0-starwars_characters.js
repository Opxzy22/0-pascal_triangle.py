#!/usr/bin/node
const request = require('request');

function fetchData (movieId) {
  const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

  request(url, async function (error, response, body) {
    if (error) {
      console.log(error)
    } else (response.statusCode == 200) {
      const films = JSON.parse(body)
      const characters = films.characters

      for (character in characters) {
        res = await new Promise((resolve, reject) => {
          request(character, (error, response, body) => {
            if (error) {
              reject(error)
            } else (response.statusCode == 200) {
              resolve(JSON.parse(body));
              console.log(res.name)
            }
          })
        });
      }
    }
  });
};
const movieId = process.argv[2];
fetchData(movieId);
