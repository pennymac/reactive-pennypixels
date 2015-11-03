var path = require('path');
var express = require('express');
var config = require('./webpack.config.prod');

var app = express();

app.use('/static', express.static('dist'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(5000, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://*:5000');
});
