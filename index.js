var http = require('http');
var fs = require('fs');
var express = require('express');
const path = require('path');
var app = express();
var port = 3000;
app.use(express.static(__dirname));
app.get('/',function(req,res)
{
  res.sendFile('index.html',
  {
    root:__dirname+'/'
  });
  });
  app.listen(port,function()
  {
    console.log('Snake Server Started on port '+port);
  });
