1,建立两个文件，配置略有不同
webpack.development.config.js
webpack.production.config.js


2，package.json文件里添加两条命令
"prd": "webpack --config webpack.production.config.js",
"dev": "webpack --config webpack.development.config.js"