var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: "./src/index.js"
    },
    output: {
        path: './dist',
        filename: "[name]_[hash:8].js"
    },
    module: {
        loaders: [
            {
                test: /\.(css|scss)/,
                loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
            }, {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            }, {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                loader: 'url?limit=3000&name=image/[hash:8].[name].[ext]'
            }, {
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url?limit=3000&name=font/[hash:8].[name].[ext]'
            }
        ]
    },
    postcss: function () {
        return [require('autoprefixer')];
    },
    plugins: [
        new ExtractTextPlugin('style_[hash:8].css'),
        new webpack.BannerPlugin('This file is created by Jalon')
    ]
}
