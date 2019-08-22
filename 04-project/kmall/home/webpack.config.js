/*
* @Author: TomChen
* @Date:   2019-08-08 16:30:19
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-22 15:45:05
*/

const path = require('path')

const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const getHtmlConfig = (name,title)=>({
    template:'./src/views/'+name+'.html',//模板文件
    filename:name+'.html',//输出的文件名
    title:title,
    hash:true,//给生成的js/css文件添加一个唯一的hash
    chunks:['common',name]
})

module.exports = {
    //指定环境
    mode:'development',
    //多入口
    entry:{
        'common':'./src/pages/common/index.js',
        'index':'./src/pages/index/index.js',
        'list':'./src/pages/list/index.js',
        'user-login':'./src/pages/user-login/index.js',
    },
    //出口
    output: {
        filename: 'js/[name]-[hash]-bundle.js',
        //指定输出参考根路径
        publicPath:'/',
        //所有输出文件的目标路径
        path: path.resolve(__dirname, 'dist')
    },
    resolve:{
        alias:{
            pages:path.resolve(__dirname,'./src/pages'),
            util:path.resolve(__dirname,'./src/util'),
            common:path.resolve(__dirname,'./src/common'),
            api:path.resolve(__dirname,'./src/api'),
            node_modules:path.resolve(__dirname,'./node_modules'),
        }
    },    
    module: {
        rules: [
        //处理css文件
          {
            test: /\.css$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                }
              },
              "css-loader"
            ]
          },       
        //处理图片
            {
                test: /\.(png|jpg|gif|eot|svg|ttf|woff2|woff)\??.*$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 400,
                            name:'resource/[name].[ext]'
                        }
                    }
                ]
            },
        //bable
            {
                test:/\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env','es2015','stage-3'],
                    },
                }
            },           
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin(getHtmlConfig('index','首页')),
        new htmlWebpackPlugin(getHtmlConfig('list','列表页')),        
        new htmlWebpackPlugin(getHtmlConfig('user-login','用户登录')),        
        new MiniCssExtractPlugin({
            filename: 'css/[name]-[hash]-bundle.css'
        })
    ],
    devServer: {
        contentBase: './dist',//内容的目录
        port:3002,//指定服务端口
        proxy: [{
          context: ['/sessions'],
          target: 'http://127.0.0.1:3000',
        }]
    },                
}