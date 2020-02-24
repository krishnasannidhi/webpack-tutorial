const path =  require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'webpackDemoBundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'] // css loader to parse the file path and style loader will add as style tag in html.
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.xml$/,
                use:['xml-loader']
            }
        ]
    }
}