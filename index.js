var express = require('express')
var app = express()
var count = 0.0

app.get('/', function (req, res) {
  res.send("Current count: " + count)
})

app.get('/up', function(req,res) {
  count++
  res.send('Counted up to: ' + count)
})

app.get('/down', function(req,res) {
  count--
  res.send("Counted down to: " + count)
})

app.get('/double', function(req, res) {
  count = count * 2
  res.send("Doubled 111 count to: " + count)
})

app.get('/halve', function(req, res) {
  count = count / 2
  res.send("Halved count to: " + count)
})

app.get('/set', function(req, res) {
  if (!isNaN(req.query.count)) {
    count = req.query.count
    res.send("Set count to: " + count)
  }
  res.status(400)
  res.send("Must be a number.")
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
