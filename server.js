const express = require('express');
const path = require('path');
const app = express();
const request = require('request');
const route = express.Router();
const config = require('./config');

//API ROUTES
const MOVIEAPI_ROOT_URL = 'https://api.themoviedb.org/3';
const MOVIE_API_KEY = config.movie_api_key;

app.route("/api/popular").get(function(req, res) {
	var url = `${MOVIEAPI_ROOT_URL}/movie/popular/?api_key=${MOVIE_API_KEY}`
	request(url, function(err, response) {
		if (err) {
			console.log('error making movie api request');
		} else {
			res.send(response.body);
		}
	})
})
app.route("/api/top").get(function(req, res) {
	var url = `${MOVIEAPI_ROOT_URL}/movie/top_rated?api_key=${MOVIE_API_KEY}`
	request(url, function(err, response) {
		if (err) {
			console.log('error making movie api request');
		} else {
			res.send(response.body);
		}
	})
})
app.route("/api/playing").get(function(req, res) {
	var url = `${MOVIEAPI_ROOT_URL}/movie/now_playing?api_key=${MOVIE_API_KEY}`
	request(url, function(err, response) {
		if (err) {
			console.log('error making movie api request');
		} else {
			res.send(response.body);
		}
	})
})

app.route("/api/tv/popular").get(function(req, res) {
	var url = `${MOVIEAPI_ROOT_URL}/tv/popular/?api_key=${MOVIE_API_KEY}`
	request(url, function(err, response) {
		if (err) {
			console.log('error making movie api request');
		} else {
			res.send(response.body);
		}
	})
})
app.route("/api/tv/top").get(function(req, res) {
	var url = `${MOVIEAPI_ROOT_URL}/tv/top_rated?api_key=${MOVIE_API_KEY}`
	request(url, function(err, response) {
		if (err) {
			console.log('error making movie api request');
		} else {
			res.send(response.body);
		}
	})
})
app.route("/api/tv/playing").get(function(req, res) {
	var url = `${MOVIEAPI_ROOT_URL}/tv/on_the_air?api_key=${MOVIE_API_KEY}`
	request(url, function(err, response) {
		if (err) {
			console.log('error making movie api request');
		} else {
			res.send(response.body);
		}
	})
})

app.route("/api/detail/:id").get(function(req, res) {
	var url = `${MOVIEAPI_ROOT_URL}/movie/${req.params.id}?api_key=${MOVIE_API_KEY}`
	request(url, function(err, response) {
		if (err) {
			console.log('error making movie api request');
		} else {
			var result = JSON.parse(response.body);
			result.year = result.release_date.slice(0,4);
			res.send(result);
		}
	})
})
app.route("/api/tv/detail/:id").get(function(req, res) {
	var url = `${MOVIEAPI_ROOT_URL}/tv/${req.params.id}?api_key=${MOVIE_API_KEY}`
	request(url, function(err, response) {
		if (err) {
			console.log('error making movie api request');
		} else {
			var result = JSON.parse(response.body);
			result.year = result.first_air_date.slice(0,4);
			res.send(result);
		}
	})
})
app.route("/api/search/:search").get(function(req, res) {
	var url = `${MOVIEAPI_ROOT_URL}/search/movie?api_key=${MOVIE_API_KEY}&query=${req.params.search}`
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