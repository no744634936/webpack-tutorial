production 模式与 development 模式的最大区别就是

development 模式下，当js报错了，浏览器里显示的是未编译的index.js 代码 易于debug

production 模式下，当js报错了，浏览器里显示的是编译后的 bundle.xxx.js的代码，不易于debug
-----------------------------------------------------------

src/index.js 里故意写入一个错误代码

自己可以尝试修改一下 webpack.config.js 文件里的mode选项

然后npm run build

然后浏览器控制台里可以看到报错的js 文件是不一样的

development 模式下，当js报错了，浏览器里显示的是未编译的index.js 代码

production 模式下，当js报错了，浏览器里显示的是编译后的 bundle.xxx.js的代码