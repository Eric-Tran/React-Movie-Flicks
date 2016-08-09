const express = require('express');
const path = require('path');
const app = express();
const request = require('request');
const route = express.Router();
const config = require('./config');

//API ROUTES
const MOVIEAPI_ROOT_URL = 'https://api.themoviedb.org/3/movie';
const MOVIE_API_KEY = config.movie_api_key;

app.route("/api/popular").get(function(req, res) {
	var url = `${MOVIEAPI_ROOT_URL}/popular/?api_key=${MOVIE_API_KEY}`
	request(url, function(err, response) {
		if (err) {
			console.log('error making movie api request');
		} else {
			res.send(response.body);
		}
	})
})

console.log(__dirname)
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'build/index.html'))
})

app.listen(process.env.PORT || 5000);
console.log("Pizzas served on Port", 5000);