## 在网页中会引入哪些常见的静态资源？  
+ JS  
  - .js .jsx .coffee .ts  
+ CSS  
  - .css .iess .sass .scss  
+ Image  
  - .jpg .png .gif .bmp .svg  
+ 字体文件(Fonts)  
  - .svg .ttf .eot .woff .woff2  
+ 模板文件  
  - .ejs .jade .vue[这是在webpack中定义组件的方式，推荐使用]  
 
 
 ## 网页中引入的静态资源多了有什么问题？  
 1. 网页加载速度慢，因为要发起很多的二次请求；  
 2. 要处理错综复杂的包与包之间的依赖关系  
 
 ## 如何解决上述两个问题？  
 1. 合并、压缩、精灵图、图片的Base64编码  
 2. 可以使用`requireJS`、也可以使用`webpack`解决各个包之间的复杂依赖关系
   
 
 ## 如何完美实现上述两种解决方案  
 1. 使用`Gulp`，是基于`task`任务  
 2. 使用`webpack`，是基于整个项目构建的  
 + 借助于`webpack`这个前端自动化构建工具，可以完美实现资源的合并、打包、压缩、混淆等诸多功能  
 + 根据官网介绍`webpack`打包的过程  
 + [webpack官网](http://webpack.github.io/)  
 
  ## 什么是webpack？  
 `webpack`是前端的一个项目构建工具，基于`Node.js`开发的前端工具  
 ![webpack]()
 
 ## webpack安装的两种方式  
 1. 运行`npm i webpack -g`全局安装`webpack`，这样就能在全局使用`webpack`的命令  
 2. 在项目根目录中运行`npm i webpack --save-dev`安装到项目依赖中
