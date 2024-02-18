#!/usr/bin/node
const request = require('request');

function fetchData (movieId) {
  const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

  request(url, async function (error, response, body) {
    if (error) {
	    console.log(error)
    } else (response.statusCode == 200) {
	    const film = JSON.parse(body)
	    const characters = film.characters
        for (character in characters) {
	    const res = await new Promise((resolve, reject) => {

}
const movieId = process.argv[2];
fetchData(movieId);
