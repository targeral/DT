const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const path = require('path');
const { rootPath, outputPath } = require('./config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devConfig = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    output: {
        filename: '[name].js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],
    devServer: {
        contentBase: outputPath,
        port: 8888,
        compress: true,
        hot: false,
        inline: false
    }
};

module.exports = merge(devConfig, baseConfig);