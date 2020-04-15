const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist'),
    },
    module: {
        rules:[
            {
                test:/\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test:/\.(png|jp?g|gif|tiff|woff?|eot|ttf|otf)$/,
                use:[ 'file-loader',
                ],
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader',
                ]
            },
            {
                test:/\.xml$/,
                use: [
                    'xml-loader',
                ],
            },
        ],
    },
};

console.log(module.exports);