var fs = require("fs");

fs.copyFile('./archivos/archivo_original.txt', 
'./otros_archivos/archivo_original.txt',
(error)=>{
    if(error){
        console.log("Error")
    }else{
        fs.writeFile('./archivos/confirmacion.txt', 'Archivo Copiado OK', (error)=>{
            console.log("Proceso Finalizado");
        })
    }
})