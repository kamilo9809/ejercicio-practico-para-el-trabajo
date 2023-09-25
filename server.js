const express = require ('express');
const expressFileUpload = require('express-fileupload')
const webpack = require ('webpack');
const webpackDevMiddleware = require ('webpack-dev-middleware');
const webpackConfig = require ('./webpack.config.js');
const initDB = require ('./server/db');

//creacion de servidor
const app = express();
app.set('port',(process.env.PORT || 3000));
app.use(express.static("client"));

//middlewarewebpack
//app.use(webpackDevMiddleware(webpack(webpackConfig)));
app.use(expressFileUpload({
    createParentPath:true
}))



app.listen(app.get('port'),()=>{
    console.log("Servidor Activo");
})



