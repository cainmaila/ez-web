var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: {
        app: ['./src/js/app.js'],
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
    		}
    	]
    },
    plugins: [
        new ExtractTextPlugin("./css/style.css", {
            allChunks: true
        })
    ]
}