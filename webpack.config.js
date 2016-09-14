var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var dev = process.env.NODE_ENV == 'dev';
module.exports = {
    entry: {
        app: ['./src/js/app.js'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name].js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=25000&name=images/[hash].[ext]'
        }]
    },
    plugins: [
        new ExtractTextPlugin("./css/style.css", {
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            title: 'Ez Web App',
            template: './src/index.html',
            dev: dev
        }),
    ]
}