var path = require('path')
var fs = require('fs')
var express = require('express');
var _ = require("lodash");

var app  = express.Router();
const directoryPath = path.join(__dirname,'../' ,'documents');
//passsing directoryPath and callback function

app.post('/',function(req,res,next){
  var filename = req.body.filename
  console.log(req.body)

// read file sample.html
fs.readFile(path.join(directoryPath,filename),   // callback function that is called when reading file is done
    function(err, data) {
      if (err){

        next(err);

      }else{
        // data is a buffer containing file content
        console.log(data.toString('utf8'))
        // if no error, file has been deleted successfully
        console.log('File create!');
        res.status(200).json({document:data.toString('utf8')})
      }
    });
});


app.use((error,req,res,next)=>{
  console.log("No fue posible crear",error)
  res.status(400).json({status:400,message:"Archivo no creado"})
})

module.exports = app
