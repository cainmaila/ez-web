var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');
var dev = process.env.NODE_ENV == 'dev';
var production = process.env.NODE_ENV == 'production';
var config = {
    entry: {
        app: ['./src/js/app.js'],
        vendor: ['vue'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name].[hash].js',
        chunkFilename: './js/[name].[id].[hash].js',
    },
    resolve: {
        root: [__dirname + '/src', __dirname + '/node_modules'],
        alias: {
            'vue': 'vue/dist/vue' + (production ? '.min' : '') + '.js',
            'vue-i18n': 'vue-i18n/dist/vue-i18n' + (production ? '.min' : '') + '.js',
            'vue-router': 'vue-router/dist/vue-router' + (production ? '.min' : '') + '.js',
            'vue-resource': 'vue-resource/dist/vue-resource' + (production ? '.min' : '') + '.js',
            'vuex': 'vuex/dist/vuex' + (production ? '.min' : '') + '.js',
        }
    },
    module: {
        noParse: [/^vue$/],
        loaders: [{
            test: /\.css$/,
            include: [
                path.resolve(__dirname, "./src/less"),
            ],
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        }, {
            test: /\.less$/,
            include: [
                path.resolve(__dirname, "./src/less"),
            ],
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
        }, {
            test: /\.(png|jpg)$/,
            include: [
                path.resolve(__dirname, "./src/images"),
            ],
            loader: 'url?limit=25000&name=images/[hash].[ext]'
        }, {
            test: /\.html$/,
            loader: 'html'
        }, {
            test: /\.vue$/,
            include: [
                path.resolve(__dirname, "./src/js/components"),
            ],
            loader: 'vue'
        }]
    },
    plugins: [
        new ExtractTextPlugin("./css/style.[hash].css", {
            allChunks: true
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.CommonsChunkPlugin( /* chunkName = */ "vendor", /* filename= */ "./js/vendor.[hash].js"),
        new HtmlWebpackPlugin({
            title: 'Ez Web App',
            template: './src/index.ejs',
            dev: dev
        }),
    ]
}

if (dev) {

} else {
    config.plugins.unshift(new CleanWebpackPlugin(['dist']));
    config.plugins.push(new CopyWebpackPlugin([
        { from: 'src/resources', to: 'resources' },
    ]));
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