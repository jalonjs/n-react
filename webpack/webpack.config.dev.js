var webpack = require('webpack');

module.exports = {
    cache: true,
    // 修改 entry
    entry: [
        // 写在入口文件之前
        "webpack-dev-server/client?http://0.0.0.0:3000",
        "webpack/hot/only-dev-server",
        // 这里是你的入口文件
        "./src/index.js"
    ],
    output: {
        path: __dirname + '/dist/',
        filename: "bundle.js",
        publicPath: "/dist/"
    },
    module: {
        loaders: [
            {
                test: /\.(css|scss)/,
                loaders: [
                    'style',
                    'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                    'postcss',
                    'sass'
                ]
            }, {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel']
            }, {
                test: /\.(gif|png|jpg)$/,
                exclude: /node_modules/,
                loaders: ['url?limit=3000&name=image/[hash:8].[name].[ext]']
            }, {
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loaders: ['url?limit=3000&name=font/[hash:8].[name].[ext]']
            }
        ]
    },
    postcss: function () {
        return [require('autoprefixer')];
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: ['', '.js', 'jsx']
    }
    // devtool: isProduction()?null:'source-map'
}