const path = require('path');

module.exports = {

    entry: './src/index.js',    //入口文件

    output: {   //打完包后的文件路径
        filename: 'bundle.js',
        path:  path.resolve(__dirname, './dist'),    //必须为绝对路径
        publicPath: "auto"
    },
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,   //打包所有js文件到dist/bundle.js的时候，如果遇到有某个js文件导入了png|jpg图片，按照asset/resource方式来打包图片
                type: 'asset/resource'
            },
            {
                test: /\.txt/,
                type: 'asset/source'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'//注意顺序，loader是从右到左顺序使用的
                ]
            }
        ]
    }

};