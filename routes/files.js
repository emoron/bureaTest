var path = require('path')
var fs = require('fs')
var express = require('express');
var _ = require("lodash");

var app  = express.Router();
const directoryPath = path.join(__dirname,'../' ,'documents');
//passsing directoryPath and callback function

const getFileInfoFromFolder = (route) => {
  const files = fs.readdirSync(route, 'utf8');
  const response = [];
  files.forEach(function(file,index){
    const extension = path.extname(file);
    const fileSizeInBytes = fs.statSync(path.join(route,file)).size;
    response.push({ key:index,name: file, extension, fileSizeInBytes });
  })
  return response;
}


app.get('/',function(req,res){

      var fileList = getFileInfoFromFolder(directoryPath)

      res.status(200).json(fileList)
  //});
});

module.exports = app
