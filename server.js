var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send("You've reached the home route!");
});

// Add your routes below this line
app.get('/parent', function(req, res) {
  res.send("I am the parent.");
});

app.get('/parent/son', function(req, res) {
  res.send("I am the son.");
});

app.get('/parent/daughter', function(req, res) {
  res.send("I am the daughter.");
});

app.get('/hello/SEI', function(req, res) {
  res.send('Welcome to SEI!');
});

app.get('/hello/:name', function(req, res) {
  res.send('Hello ' +  req.params.name + "!");
});

app.get('/:name/:thing', function(req, res) {
  res.send( req.params.thing + ', ' +  req.params.name)
});

app.get('/console', function(req, res) {
  console.log(req.query);
  res.send('Done');
})

app.get('/color', function(req, res) {
  var colorString = req.query.color;
  //res.send("<h1 style=\"color: " + colorString + ";\">COLOR</h1>");
  res.send(`<h1 style="color: ${colorString};">COLOR</h1>`);
})

app.get('/*', function(req, res) {
  var wordArray = req.params[0].split('/');
  var strs = wordArray.map(function(word, index) {
    if (index % 2 === 0) {
      return word.toUpperCase();
    } else {
      return word;
    }
  });
  var newString = strs.join(' ');
  res.send(newString);
});

// Add your routes above this line
app.listen(8000);
