/*
* @Author: TomChen
* @Date:   2019-07-25 15:02:03
* @Last Modified by:   TomChen
* @Last Modified time: 2019-07-26 16:16:33
*/
const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')
const querystring = require('querystring')

const swig = require('swig')

const { get,add,del } = require('./Model/item.js')
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

        const mode = require(path.normalize(__dirname+"/Controller/"+controller))

        mode[action] && mode[action](...[req,res].concat(args))

    }

    /*    
    //首页路由 / /index.html
    if(pathname == "/" || pathname == "/index.html"){
        //1.获取数据
        get()
        .then(data=>{
            //将数据分配到页面并返回页面
            const filePath = path.normalize(__dirname+"/static/index.html")
            //引入模版
            const template = swig.compileFile(filePath)
            
            const html = template({
                data:data
            })
            res.setHeader('Content-type',"text/html;charset=UTF-8")
            res.end(html) 
        })
        .catch(err=>{
            res.setHeader('Content-type',"text/html;charset=UTF-8")
            res.statusCode = 404
            res.end('<h1>请求出错了</h1>')
        })
    }
    //添加路由
    else if(pathname == "/add"){//POST请求
        //1.获取参数
        let body = ''
        req.on('data',(chunk)=>{
            body+=chunk
        })
        req.on('end',()=>{
            const query = querystring.parse(body)
            //2.根据参数生成任务对象并且写入到文件中
            add(query.task)
            .then(data=>{
                //3.如果写入成功,将新生成的任务对象返回到前端    
                res.end(JSON.stringify({
                    code:0,
                    message:'添加成功',
                    data:data
                }))
            })
            .catch(err=>{
               console.log("add task err::",err)
               res.end(JSON.stringify({
                    code:1,
                    message:'添加失败',
                }))                
            })
        })
    }
    else if(pathname == "/del"){//get
        //1.获取参数
        const id = parsedUrl.query.id
        //2.根据参数删除任务对象并且更改文件
        del(id)
        .then(()=>{
            //3.返回结果
            res.end(JSON.stringify({
                code:0,
                message:'删除成功'
            }))            
        })
        .catch(err=>{
            res.end(JSON.stringify({
                code:1,
                message:'删除失败'
            }))                 
        })

    }
    //静态资源的处理
    else{
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
    }
    */
})

server.listen(3000,'127.0.0.1',()=>{
    console.log('server is running on http://127.0.0.1:3000')
})
