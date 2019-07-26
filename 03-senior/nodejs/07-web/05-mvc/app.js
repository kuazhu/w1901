/*
* @Author: TomChen
* @Date:   2019-07-25 15:02:03
* @Last Modified by:   TomChen
* @Last Modified time: 2019-07-26 16:51:48
*/
const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')

const mime = require('./mime.json')

//每一次请求都会执行createServer方法中的函数
const server = http.createServer((req,res)=>{
    //路由:根据不同的请求做不同的处理
    console.log(req.method+"::"+req.url)
    
    const parsedUrl = url.parse(req.url,true)

    const pathname = parsedUrl.pathname

/*
    约定:
        以 /static/开头的请求都是静态资源
        不以/static/开头的请求是具体的路由
        路由的格式:
        /Controller/action/arg1/arg2/arg3...
*/
    
    //静态资源的处理
    if(pathname.startsWith('/static/')){
        const filePath = path.normalize(__dirname+"/"+req.url)
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
    }
    //处理路由
    else{
        //解析路由
        const paths = pathname.split('/')
        const controller = paths[1] || "Index"
        const action =  paths[2] || "index"
        const args = paths.splice(3)

        /*
         约定:
            所有的Controller文件都保存在 ./Controller/目录下面
        */
        try{
            const mode = require(path.normalize(__dirname+"/Controller/"+controller))
            mode[action] && mode[action](...[req,res].concat(args))            
        }catch(err){
            console.log('err:',err)
            res.setHeader('Content-type',"text/html;charset=UTF-8")
            res.statusCode = 404
            res.end('<h1>请求出错了</h1>')            
        }
    }
})

server.listen(3000,'127.0.0.1',()=>{
    console.log('server is running on http://127.0.0.1:3000')
})
