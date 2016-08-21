var path = require('path');
module.exports = {
    entry: {
        app: ['./src/app.js']
    },
    output: {
        path: path.join(__dirname, 'bin'),
        publicPath: "/assets/",
        filename: 'app.bundle.js',
    },
    module: {
        loaders: [{
            test: /\.js|jsx$/,
            exclude: /node_modules/,
            loaders: ['babel-loader'],
        }]
    }
}



