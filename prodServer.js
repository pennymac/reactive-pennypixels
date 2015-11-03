var path = require('path');
var express = require('express');
var config = require('./webpack.config.prod');

var app = express();

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(5000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://*:5000');
});
