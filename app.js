var express = require('express');
var app = express();

// create an object to store our counters
var counts = { current: 0, previous: 0 }

// update the current count with a new value after
// updating the previous count
function updateCount(count) {
  if (isNaN(count)) {
    throw new Error("Invalid number.");
  }
  counts['previous'] = counts['current'];
  counts['current'] = count;
}

// return the JSON string of the counter dictionary
function currentValue() {
  return JSON.stringify(counts);
}

// redirect basic content routes to the bootstrap/jquery folder(s)
app.use('/js', express.static('node_modules/bootstrap/dist/js'));
app.use('/js', express.static('node_modules/jquery/dist'));
app.use('/css', express.static('node_modules/bootstrap/dist/css'));
app.use('/fonts', express.static('node_modules/bootstrap/fonts'));

// serve static files from the 'public' folder
app.use('/', express.static('public'));

// set up api
app.get('/api/count', function (request, response) {
  response.send(currentValue());
});

app.get('/api/add', function(request,response) {
  updateCount(counts['current'] + 1);
  response.send(currentValue());
});

app.get('/api/subtract', function(request,response) {
  updateCount(counts['current'] - 1);
  response.send(currentValue());
});

app.get('/api/double', function(request, response) {
  updateCount(counts['current'] * 2);
  response.send(currentValue());
});

app.get('/api/halve', function(request, response) {
  updateCount(counts['current'] / 2);
  response.send(currentValue());
});

app.get('/api/set', function(request, response) {
  updateCount(parseInt(request.query.count))
  response.send(currentValue());
});

// start the server on port 3000
// open a browser and navigate to http://localhost:3000
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = app;
