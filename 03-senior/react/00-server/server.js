/*
* @Author: TomChen
* @Date:   2019-08-12 16:16:31
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-12 16:19:26
*/
const http = require('http')


const server = http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin',"*")
    res.end(JSON.stringify(["learn js",'learn react']))
})

server.listen(3000,'127.0.0.1',()=>{
    console.log('server is running on http:127.0.0.1:3000')
})