var fs = require("fs");

fs.copyFile('./archivos/archivo_original.txt', './archivos/archivo_nuevo.txt', (error)=>{
    if(error){
        console.log("Error al copiar")
        throw error;
    }else{
        console.log("Copia OK")
    }
})