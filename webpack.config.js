const path = require('path');

module.exports = {

    entry: './src/index.js',    //入口文件

    output: {   //打完包后的文件路径
        filename: 'bundle.js',
        path:  path.resolve(__dirname, './dist')    //必须为绝对路径
    },
    mode: 'none'

};