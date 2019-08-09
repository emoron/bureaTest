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
  // writeFile function with filename, content and callback function
  fs.writeFile(path.join(directoryPath,filename), ' ', function (err) {
    if (err){

      next(err);

    }else{
      // if no error, file has been deleted successfully
      console.log('File create!');
      res.status(200).json({message:"Archivo Creado Exitosamente"})
    }
  });

});


app.use((error,req,res,next)=>{
  console.log("No fue posible crear",error)
  res.status(400).json({status:400,message:"Archivo no creado"})
})

module.exports = app
