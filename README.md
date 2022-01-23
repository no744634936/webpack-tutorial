

1,下载handlebars 模板引擎 (ejs,pug等都可以)

    npm install handlebars --save

2, 创建src/index.hbs


3, npm install handlebars-loader --save-dev

4,配置 webpack.config.js
-------------------------
        new HtmlWebpackPlugin({

            title: 'Hello world',

            template: 'src/index.hbs',

            description: 'Some description'

        }),

------------------------

        {
            test: /\.hbs$/,
            use: [
                'handlebars-loader'
            ]
        }
--------------------------

5, npm run build
 可以看到 dist/index.html 是按 src/index.hbs 模板来创建的