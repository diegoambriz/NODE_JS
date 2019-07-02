var fs = require("fs");

function copiarArchivo(rutaOriginal, nuevaRuta, archivoParaCopiar){
    fs.copyFile( rutaOriginal + '/' + archivoParaCopiar, nuevaRuta + '/' + archivoParaCopiar, (error)=>{
        if(error){
            console.log("error");
        }else{
            eliminarArchivo( rutaOriginal, archivoParaCopiar )
        }
    })
}

function eliminarArchivo(rutaOriginal, archivoParaCopiar){
    fs.unlink(rutaOriginal + '/' + archivoParaCopiar, (error)=>{
        if(error){
            console.log("Error al eliminar");
        }else{
            console.log("OK");
        }
    })
}

copiarArchivo('./archivos', './otros_archivos', 'archivo_original.txt');
