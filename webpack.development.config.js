const path = require('path');
// const TerserPlugin=require("terser-webpack-plugin")  // development 环境下不需要减小bundle.js文件的体积,development环境下可以注释掉
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: './src/index.js',

    output: {
        filename: 'bundle.js',    // 测试环境下不需要 bundle.[contenthash].js
        path:  path.resolve(__dirname, './dist'),    //必须为绝对路径
        publicPath: "auto"
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
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
                        presets: [ '@babel/env' ],
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
        // new TerserPlugin(),// development 环境下不需要减小bundle.js文件的体积,development环境下可以注释掉
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