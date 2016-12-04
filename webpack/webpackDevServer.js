var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.dev');

new WebpackDevServer(webpack(config), {
    contentBase:  'src/client',
    proxy: {
        '/api/*': {
            target: 'http://localhost:9000'
        }
    },
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(3000, 'localhost', function (err, result) {
    if (err) {
        return console.log(err);
    }

    console.log('webpack dev server is listening at http://localhost:3000/')
});