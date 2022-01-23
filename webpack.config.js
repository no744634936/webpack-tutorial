const path = require('path');
const TerserPlugin=require("terser-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: './src/index.js',    //入口文件

    output: {   //打完包后的文件路径
        filename: 'bundle.[contenthash].js',
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
                     MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                     MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'//注意顺序，loader是从右到左顺序使用的
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/env' ], //将js的6，7，8，9，10，等版本的语法编译成版本5的语法
                        // class properties这个新特性没有被主流浏览器支持，所以要添加@babel/plugin-proposal-class-properties插件
                        // 如果还有其他被使用到的新特性，但是没被主流浏览器，也要在网上查一下，然后添加到plugins里面来
                        plugins: [ '@babel/plugin-proposal-class-properties' ] 
                    }
                }
            },
            {
                test: /\.hbs$/,
                use: [
                    'handlebars-loader'
                ]
            }
        ]
    },
    plugins:[
        new TerserPlugin(),// webpack5 自带的插件
        new MiniCssExtractPlugin({
            filename: 'styles.[contenthash].css'
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Hello world',
            template: 'src/index.hbs',
            description: 'Some description'
        }),
    ]
};