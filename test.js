var printers = []

for(var i = 0; i<3; i++){
  console.log("Loop1")
  printers[i] = function(){

    myCoolPrinter(i);
  }

}
for(i = 0; i<3; i++){
  console.log("Loop2")
  printers[i]();
}
for(var j = 0; j<3 ; j++){
  console.log("Loop3")
  printers[j]();
}

function myCoolPrinter(v1){
  console.log(v1)
}
