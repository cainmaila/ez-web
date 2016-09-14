var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
var production = process.env.NODE_ENV == 'production';
var config = {
    entry: {
        app: ['./src/js/app.js'],
        vendor: ['vue'],
    },
    output: {
        path: path.resolve(__dirname, 'web'),
        filename: './js/[name].js'
    },
    resolve: {
        root: [__dirname + '/src', __dirname + '/node_modules'],
        alias: {
            vue: 'vue/dist/vue' + (production ? '.min' : '') + '.js',
        }
    },
    module: {
        noParse: [/^vue$/],
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
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.CommonsChunkPlugin( /* chunkName = */ "vendor", /* filename= */ "./js/vendor.js"),
    ]
}
if (production) {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    );
}
module.exports = config;