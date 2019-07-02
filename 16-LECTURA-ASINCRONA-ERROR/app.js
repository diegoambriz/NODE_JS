var fs = require("fs");

fs.readFile('./archiivos/texto.txt', 'utf8', (error, datos)=>{
    if(error){
        console.log("Error de Lectura");
        throw error;
    }else{
        console.log(datos)
    }
})