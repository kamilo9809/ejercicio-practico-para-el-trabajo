const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports={
    mode : "development",
    entry : "./src/client/index.html",
    output : {
        path : path.join(__dirname, "dist"),
        filename : "bundle.js"
    },
    module:{
        rules:{
            test : /\.css$/,
            use : ['style-loader','css-loader']
        }
    },
        plugins:[
        new htmlWebpackPlugin({
            template: './src/client/index.html'
        })
    ]
}

