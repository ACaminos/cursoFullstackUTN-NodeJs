var http = require ("http");
var fs = require("fs");

var server = http.createServer(function(peticion,respuesta){
    fs.readFile('../Ejercicio1/fileToRead.txt','utf-8',function(error,data){
        if(error){
            console.log('error: ',error);
        }
        else{
            respuesta.end(data);
            console.log(data)
        }
    })
});

server.listen(3000, function(){
    console.log(`servidor en : ${this.address().port}`);
});