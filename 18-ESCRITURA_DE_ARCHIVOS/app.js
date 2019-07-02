var fs = require("fs");

fs.appendFile('./archivos/texto2.txt', 'NUEVOS DATOS 2', (error)=>{
    if(error){
        console.log("Error al escribir archivo");   
    }else{
        console.log("Archivo modificado exitosamente");
    }
})