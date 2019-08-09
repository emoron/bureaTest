var path = require('path')
var fs = require('fs')
var express = require('express');
var _ = require("lodash");

var app  = express.Router();
const directoryPath = path.join(__dirname,'../' ,'documents');
//passsing directoryPath and callback function

app.post('/',function(req,res,next){
  console.log(req.body)
  var filename = req.body.filename

  // delete file named 'sample.txt'

  fs.unlink(path.join(directoryPath,filename), function (err) {
      if (err){
        next(err);

      }else{
        // if no error, file has been deleted successfully
        console.log('File deleted!');
        res.status(200).json({message:"Archivo Eliminado Exitosamente"})
      }
    });

})

app.use((error,req,res,next)=>{
  console.log("No fue posible eliminar",error)
  res.status(400).json({status:400,message:"Archivo no existente"})
})

module.exports = app
