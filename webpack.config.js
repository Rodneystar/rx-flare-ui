const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');


module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.m?jsx?$/,
                resolve: { extensions: [".js", ".jsx"] },
                exclude: /node_modules/,
                use: { loader: 'babel-loader' }
            }
        ]
    },
    
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new HotModuleReplacementPlugin()
    ]
}