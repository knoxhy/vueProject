// nodejs 中的path模块
var path = require('path');

module.exports = {
    // 入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的index.js文件
    entry: path.resolve(__dirname, './app/index.js'),
    // 输出配置
    output: {
        // 输出路径是 myProject/output/static
        path: path.resolve(__dirname, './output'),
        filename: '[name].hansh.js'
    },
    resolve: {
        extensions: ['', '.js', '.vue']
    },
    module: {
        
        loaders: [
            // 使用vue-loader 加载 .vue 结尾的文件
            {
                test: /\.vue$/, 
                loader: 'vue'   
            },{
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    },
    vue:{
      loaders:{
        js:'babel'
      }
    },
    babel:{
      'presets':['es2015','stage-0'],
      'plugins':['transform-runtime']
    },
  devServer: {
    contentBase: "./output",//本地服务器所加载的页面所在的目录
    colors: false,//终端中输出结果为彩色
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  } 
}