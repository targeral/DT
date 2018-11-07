/**
 * @file 基本配置信息
 * @author targeral
 */

const path = require('path');

const isProdMode = process.env.NODE_ENV === 'production';

exports.rootPath = path.resolve(__dirname, '..');

exports.publicPath = '/';

exports.isProdMode = isProdMode;

exports.outputPath = path.resolve(__dirname, '..', 'output');
