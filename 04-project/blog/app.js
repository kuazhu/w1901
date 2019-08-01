/*
* @Author: TomChen
* @Date:   2019-07-31 16:03:32
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-01 15:54:23
*/
const express = require('express')
const swig = require('swig')
const mongoose = require('mongoose')

const app = express()
const port = 3000

//1.连接数据库
mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true })

//获取db对象
const db = mongoose.connection

//连接数据库失败
db.on('error', (err) => {
    console.log('connection db error:',err)
    throw err
})
//连接数据库
db.once('open', () => {
    console.log('connection db success')
})

//静态资源处理
app.use(express.static('public'))

//开发阶段设置不走缓存
swig.setDefaults({
  // cache: 'memory'
  cache:false
})
//配置应用模板
//第一个参数是模板名称,同时也是模板文件的扩展名
//第二个参数是解析模板的方法
app.engine('html', swig.renderFile)

//配置模板的存放目录
//第一参数必须是views
//第二个参数是模板存放的目录
app.set('views', './views')

//注册模板引擎
//第一个参数必须是view engine
//第二个参数是模板名称,也就是app.engine的第一个参数
app.set('view engine', 'html')

app.use("/",require('./routes/index.js'))

app.listen(port, () => console.log(`app listening on port ${port}!`))







