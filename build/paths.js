const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd()); // fs.realpathSync以同步的方式查看文件或者目录的绝对路径
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  appSrc: resolveApp('src')
};