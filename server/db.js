const mysql = require('mysql');
const conexion = mysql.createConnection({
    host:'localhost',
    database:'ejerciciopruebamusical',
    user:'root',
    setThePassword: ''
})

conexion.connect((error)=>{
    if(error){
        throw error;
    }else{
        console.log("Conexion exitosa");
    }
})

conexion.end();