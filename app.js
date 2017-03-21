var express = require('express');
var app = express();
var port = process.env.port || 8080;

app.use(__dirname);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(port, function () {
  console.log('Holis');
  console.log('Example app listening on port ' + String(port));
});