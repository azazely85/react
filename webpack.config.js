var path = require('path')

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/index.js'
    ],
    output: {
        publicPath: 'http://localhost:3000/',
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devServer: {
        host: 'localhost',
        port: 3000,
        contentBase: __dirname + '/public',

        inline: true,
        hot: true,
        historyApiFallback: true
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loaders: ['babel-loader'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css/,
                loaders: ['style-loader', 'css-loader'],
            },
            {
                test: /\.svg$/,
                loader: 'file-loader'
            }
        ]
    }
}
