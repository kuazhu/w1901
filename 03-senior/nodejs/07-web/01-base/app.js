/*
* @Author: TomChen
* @Date:   2019-07-25 11:32:59
* @Last Modified by:   TomChen
* @Last Modified time: 2019-07-25 11:50:25
*/
const http = require('http')

//每一次请求都会执行createServer方法中的函数
const server = http.createServer((req,res)=>{
    //req request 可读流
    //res response 可写流
    res.write('hello')
    res.end('good')
})

server.listen(3000,'10.214.137.104',()=>{
    console.log('server is running on http://127.0.0.1:3000')
})



