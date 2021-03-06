const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    entry: {
        app: './src/index.js',
        print:'./src/print.js',
    },
    mode: "development",
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({title: 'Output Management',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
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