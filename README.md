1,有关网页缓存的设置

    如果某个网页有大量，js，css等静态文件的时候，
    
    每次打开网页都要重新加载这些静态资源非常耗时间

    所以可以用户本地浏览器的缓存来缓存这些文件

    但是如果网页的js，css更新了，用户还是从缓存中取静态资源，
    
    那么用户永远看不到新的网页，

    解决方案是每更新一次静态资源，网页就改一次名字，

    如果名字改变了，浏览器就会自动加载新版本的网页，然后缓存静态文件

    webpack的可以自动改名

    webpack.config.js 文件里

    将'styles.css' 改为 'styles.[contenthash].css'

    将'bundle.js' 改为  'bundle.[contenthash].js'

    每次打包，
    
    如果只有js文件发生变化，就只会生成一个新的bundle.xxxx.js 文件

    如果只有scss文件发生变化，就会只生成一个新的styles.xxxx.css 文件

    js跟scss 文件同时发生变化，同时生成行的bundle，styles 文件


2, npm install clean-webpack-plugin --save-dev

   每次打包都生成新的js，或新css文件

   或者同时生成新js跟新css文件

   旧得js，css文件因需要被删除

   这就需要该插件来只保留新的css，js文件


3, npm install html-webpack-plugin --save-dev

    自动生成 dist/index.html 文件

    并引入bundle.xxxx.js 文件，跟 styles.xxxx.css 文件

4，以后就使用 dist/index.html 文件就可以了

4,查看 webpack.config里关于插件的导入与配置
