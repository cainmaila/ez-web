var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
module.exports = {
    entry: {
        app2: ['./src/js/app.js'],
    },
    output: {
        path: path.resolve(__dirname, 'web'),
        filename: './js/[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
		}, {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
    		},
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
    	]
    },
    plugins: [
        new ExtractTextPlugin("./css/style.css", {
            allChunks: true
        }),
    ]
}