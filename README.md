1，terser-webpack-plugin 
该插件可以压缩减少 bundle.js 文件的体积，webpack5 自带，无需install


2，npm install --save-dev mini-css-extract-plugin

    该插件可以将css内容从html文件里的style标签里取出，做成一个单独styles.css文件

    ・css跟scss的rules里的 "style-loader"改为 MiniCssExtractPlugin.loader


    ・创建一个新的heading 组件，可以渲染一个h1 标签，然后导入index.js文件


    ・npm run build 

        可以看到hello-world-button 跟 heading 

        两个组件的css都被集中放入dist/style.css 文件中去了


    ・然后将生成的 styles.css 文件导入到index.html 文件里去

        <link rel="stylesheet" href="./dist/styles.css" />


