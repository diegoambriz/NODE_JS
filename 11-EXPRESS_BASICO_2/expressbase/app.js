var express = require('express');

var app = express();

app.all('/', function(peticion, respuesta){
  respuesta.send("Hola");
});

app.get('/acerca',function(peticion, respuesta){
  respuesta.send("ACERCA");
});

app.post('/acerca',function(peticion, respuesta){
  respuesta.send("ACERCA");
});

app.delete('/acerca',function(peticion, respuesta){
  respuesta.send("ACERCA");
});

app.put('/acerca',function(peticion, respuesta){
  respuesta.send("ACERCA");
});


var server = app.listen(3000, function(){

});