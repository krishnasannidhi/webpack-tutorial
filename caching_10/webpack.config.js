const path =  require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: {
        //importModule: './src/import-index.js'
        webpackDemoBundle: './src/index.js',
        another: './src/another-module.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        //chunkFilename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Caching'
        })
    ],
    optimization: {
        moduleIds: 'hashed',
        splitChunks: {
            //chunks: 'all'
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        },
        runtimeChunk: 'single'
    }
}