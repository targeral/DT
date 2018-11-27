const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

const prodConfig = {
    mode: 'development',
    output: {
        filename: '[name].[chunkhash:5].js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash:5].css'
        }),
        new webpack.HashedModuleIdsPlugin(),
        new SWPrecacheWebpackPlugin(
            {
                cacheId: 'my-project-name',
                dontCacheBustUrlsMatching: /\.\w{8}\./,
                filename: 'service-worker.js',
                minify: true,
                navigateFallback: 'index.html',
                staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
            }
        )
    ],
    // optimization: {
    //     removeEmptyChunks: true,
    //     // minimizer: [
    //     //     new UglifyJsPlugin({
    //     //         exclude: /\.min\.js$/,
    //     //         cache: true,
    //     //         parallel: true, // 使用多进程并行运行来提高构建速度
    //     //         extractComments: false, // 移除注释
    //     //         sourceMap: false,
    //     //         uglifyOptions: {
    //     //             compress: {
    //     //                 warnings: false,
    //     //                 drop_debugger: true, // 删除debugger;声明
    //     //                 dead_code: true, // 删除无法访问的代码
    //     //             }
    //     //         }
    //     //     }),
    //     //     new OptimizeCssAssetsPlugin({
    //     //         cssProcessorOptions: {
    //     //             autoprefixer: { disable: true },
    //     //             discardComments: { // 删除规则，选择器和声明中的注释.对于使用！标记的会保留
    //     //                 removeAll: true // 移除注释
    //     //             }
    //     //         },
    //     //         canPrint: true
    //     //     })
    //     // ],
    //     splitChunks: {
    //         chunks: 'initial',
    //         cacheGroups: {
    //             commons: {
    //                 test: /[\\/]node_module[\\/]/,
    //                 name: 'vendors',
    //                 chunks: 'initial'
    //             }
    //         }
    //     }
    // }
};

module.exports = merge(baseConfig, prodConfig);
