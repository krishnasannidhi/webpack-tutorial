const path =  require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'webpackDemoBundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}