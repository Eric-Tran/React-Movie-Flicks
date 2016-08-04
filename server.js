const express = require('express');
const path = require('path');
const app = express();

console.log(__dirname)
app.use(express.static(__dirname + '/build'));


app.get('*', function (req, res, next) {
	res.sendFile(path.resolve(__dirname, './build'))
})

app.listen(process.env.PORT || 5000);
console.log("Pizzas served on Port", 5000);