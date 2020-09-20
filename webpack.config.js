const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPLugin = require("mini-css-extract-plugin")
// const path = require('path');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  'style-loader',
                  'css-loader',
                  'sass-loader',
                ],
            },
            {
                // loading files   
                test: /\.(png|jpg|gif|jpeg|gif|ico)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        outputPath: "images",
                        name: "[name]-[sha1:hash:7].[ext]"
                    }
                }]
            },
            {
                // Loading fonts
                test: /\.(ttf|otf|eot|woff|woff2)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        outputPath: "images",
                        name: "[name].[ext]"
                    }
                }]
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './public/index.html'
    })],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:4000'
        })
    }
}