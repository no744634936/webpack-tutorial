webpack 处理css


1，componentS/hello-world-button.js  文件里导入 hello-world-button.css 文件

2，index.js 导入 hello-world-button.js

3，npm run build 打包index.js文件的时候
   
   发现有导入 hello-world-button.css文件，

   但是webpack不知道如何打包

4，

    npm install css-loader   --save-dev

    // css-loader 只读取css文件里的内容

    npm install style-loader --save-dev

    //style-loader 将css类容放入html标签的style属性里去

    //style-loader 会将css放入bundle.js文件，它们不是分开的

    webpack.config.js 文件里写入 test: /\.css$/   规则

5, npm run build 

6, 浏览器打开index.html文件，点击按钮，查看按钮css属性
