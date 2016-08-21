var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: {
        app: [
            'webpack-dev-server/client?http://0.0.0.0:8787',
            'webpack/hot/only-dev-server',
            './src/app.js'
        ]
    },
    output: {
        path: path.join(__dirname, 'bin'),
        publicPath: "/assets/",
        filename: 'app.bundle.js',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js|jsx$/,
            exclude: /node_modules/,
            loaders: ['react-hot','babel-loader'],
        }]
    }
}



