const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const paths = require('./paths');
const { rootPath, publicPath, isProdMode, outputPath } = require('./config');

if (isProdMode) {
    // do something in production mode
}

let copies = [
    {
        from: path.resolve(rootPath, './src/static'),
        to: 'static'
    },
    {
        from: path.resolve(rootPath, './src/sw.js'),
        to: ''
    }
];


const baseConfig = {
    entry: {
        app: path.resolve(rootPath, 'src/index.js'),
        // sw: path.resolve(rootPath, 'src/sw.js')
    },
    output: {
        path: outputPath
    },
    resolve: {
        modules: [
            path.resolve(rootPath, 'src'),
            path.resolve(rootPath, 'node_modules')
        ],
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(ts|tsx)$/,
                include: paths.appSrc,
                use: ['ts-loader']
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', {
                    loader: 'less-loader',
                    options: {
                        javascriptEnabled: true
                    }
                }]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: 'static/img/[name].[ext]',
                        limit: 8192
                    }
                }]
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)(#.+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'static/fonts/[name].[ext]',
                        limit: 8192
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(rootPath, 'src/index.html'),
            title: 'DT',
            baseHref: publicPath
        }),
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/),
        new CopyWebpackPlugin(copies)
    ]
};

module.exports = baseConfig;