var fs = require("fs");

fs.unlink('./archivos/archivox.txt', (error)=>{
    if(error){
        console.log("Error")
    }else{
        console.log("OK")
    }
})