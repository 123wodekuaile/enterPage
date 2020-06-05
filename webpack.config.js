const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
const isDev = process.env.NODE_ENV =='development'
const config = {
    entry:{
        path: path.resolve(__dirname,'src/index.js')
    },
    output:{
        filename:'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            }
        ]
    },
    resolve:{
        alias:{
            "@":path.resolve("src"),
        }
    },
    plugins:[
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            'process.env':{
              NODE_ENV:isDev?'"development"':'"production"',
            }
      
          }),
        new HtmlWebpackPlugin({
            title:'申请人领取-学生校园通行码领取'
        })
    ]
}
if(isDev){
    config.devServer={
      port:8000,
      host:'0.0.0.0',
      overlay:{
        errors:true
      },
      // open:true  //每次都打开一个网页
      hot:true //只渲染一个组件
    }
    // config.plugins.push(
    //   new webpack.HotModuleReplacementPlugin(),
    //   new webpack.NoEmitOnErrorsPlugin()
    // )
  }
module.exports = config;