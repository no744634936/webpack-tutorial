有四种asset module

1，asset/resource     // import large images or large font files

2，asset/inline       // import small files like svg

3，asset             // 大于8k 用asset/resource，小于8k用asset/inline

4，asset/source      // import text file

------------------------
流程

1， add-image.js 文件里有导入图片

2， add-image.js 文件导入 index.js 文件

3，告诉webpack 如何import 图片文件到bundle.js 文件


  打包所有js文件到dist/bundle.js的时候，

  如果遇到有某个js文件导入了png或者jpg图片，

   webpack会去webpack.config.js文件里查找是否有rules可以参照，

   否则webpack不知道如何将图片打包到bundle.js 里去

4，webpack.config.js 文件里写入 module的rules,来导入图片

5，设置webpack.config.js 文件里publicPath，
  
   这个是静态文件的路径，告诉webpack去哪里找打包后的图片等静态文件
   
   默认为auto,相当于告诉告诉webpack去dist 文件夹里找图片

   将静态文件上传到cdn后，需要明确写明 publicPath(例如: https://some-cdn.com)

6，npm run build 
  
  可以看见kiwi.jpg图片被导入到dist文件夹里了


-------------------------------------------------------

测试 asset/inline

1, 删除dist文件夹

2，将webpack.config.js 文件中的'asset/resource'改为"asset/inline"
   
3,npm run build

 可以看到图片并没有被导入到dist 文件夹

 浏览器打卡index.html后可以看到

 图片的src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABI.."

 说明图片被解析成base64放入index.html文件了，这就导致bundle.js文件变大，速度变慢
 
 如果是体积小的svg，icon文件可以用 asset/inline 来打包，

4，将webpack.config.js 文件中的 "asset/inline" 改为 'asset/resource'

   

-------------------------------------------------------------------

测试 asset

asset自当选择打包方法， 大于8k 用asset/resource，小于8k用asset/inline

使用asset 比较好一点

这个8k阈值可以更改，如下

 rules: [

            {

                test: /\.(png|jpg)$/,

                type: 'asset',

                parser: {

                    dataUrlCondition: {

                        maxSize: 3 * 1024  //小于3kb就使用asset/inline

                    }

                }

            }

        ]


----------------------------------------------------------

测试 asset/source

1, add-image.js 文件里导入文本文件

2, webpack.config.js 文件中添加/\.txt/, 规则

3，npm run build 即可

可以看到img标签的alt属性被更改