const path = require('path')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: {
        app: './chapter7_s35/main.js',
    },
    output: {
        path: path.join(__dirname, '/chapter7_s35/dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    module: {

    },
    plugins: [],
    optimization: {},
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.json', '.jsx', '.css']
    }
}