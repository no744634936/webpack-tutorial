set up
-------------------------------------------------
1,建立三个文件

src/hello-world.js

src/index.js

2,

npm init -y


3,

npm install webpack  --save-dev

npm install webpack-cli --save-dev

4,

 建立webpack.config.js 文件


5,
package.json 文件 添加  "build": "webpack" 命令

项目下执行 npm run build

生成 /dist/bundle.js文件


6,
index.html 导入 bundle.js文件
