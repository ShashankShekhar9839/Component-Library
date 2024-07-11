const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/styles.css',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), 
    }, 
    module: {
        rules: [{
        test: /\.css$/i,
        use: [
            MiniCssExtractPlugin.loader, 
            'css-loader'
        ],
    }],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css',
        })
    ]
}
