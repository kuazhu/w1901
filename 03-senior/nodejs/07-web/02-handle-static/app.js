/*
* @Author: TomChen
* @Date:   2019-07-25 15:02:03
* @Last Modified by:   TomChen
* @Last Modified time: 2019-07-25 15:53:52
*/
const http = require('http')
const fs = require('fs')
const path = require('path')
const mime = require('./mime.json')


//每一次请求都会执行createServer方法中的函数
const server = http.createServer((req,res)=>{
    console.log("url::",req.url)
    //静态资料的处理
    const filePath = path.normalize(__dirname+"/static/"+req.url)
    //1.读取文件
    fs.readFile(filePath,(err,data)=>{
        //2.返回数据
        if(err){
            res.setHeader('Content-type',"text/html;charset=UTF-8")
            res.statusCode = 404
            res.end('<h1>请求出错了</h1>')
        }else{
            //1.根据扩展名设置mime类型
            //.css text/css
            //.html text/html
            const extname = path.extname(filePath)
            const mimeType = mime[extname] || 'text/plain'
            res.setHeader('Content-type',mimeType+";charset=UTF-8")
            res.end(data) 
        }
    })
})

server.listen(3000,'127.0.0.1',()=>{
    console.log('server is running on http://127.0.0.1:3000')
})
