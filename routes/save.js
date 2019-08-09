var path = require('path')
var fs = require('fs')
var express = require('express');
var _ = require("lodash");

var app  = express.Router();
const directoryPath = path.join(__dirname,'../' ,'documents');
//passsing directoryPath and callback function

app.get('/',function(req,res){

  fs.readdir(directoryPath, function (err, files) {
      //handling error
      if (err) {
          return console.log('Unable to scan directory: ' + err);
      }
      //listing all files using forEach
      files.forEach(function (file) {
          // Do whatever you want to do with the file
          console.log(file);
      });
  });

});

module.exports = app
