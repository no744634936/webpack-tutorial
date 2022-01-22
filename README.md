有时项目里可能会用到一些最新的js语法，

但是，并不是所有浏览器都支持该语法，

所以要用babel去将最新的js语法编译成所有浏览器都支持的语法



1，componentS/hello-world-button.js  文件里导入 hello-world-button.scss 文件

    hello-world-button.js文件里有一句

    buttonCssClass = 'hello-world-button'; 

    这个 class 属性的写法主流浏览器并不兼容，
       
    需要用babel来编译成主流浏览器兼容的写法


2，index.js 导入 hello-world-button.js

3，npm run build 
   webpack 打包index.js文件的时候
   
   发现class 属性的写法主流浏览器并不兼容



4， webpack.config.js 文件里写入 test: /\.js$/,   规则
 
   npm install @babel/core --save-dev

   npm install babel-loader --save-dev

   npm install @babel/preset-env --save-dev

   npm install @babel/plugin-proposal-class-properties --save-dev





5, npm run build  生成 bundle.js 文件

6, 浏览器打开index.html文件，点击按钮，查看按钮css属性
