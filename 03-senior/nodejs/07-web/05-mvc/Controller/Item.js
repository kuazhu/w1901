/*
* @Author: TomChen
* @Date:   2019-07-26 16:10:06
* @Last Modified by:   TomChen
* @Last Modified time: 2019-07-26 16:50:54
*/
const path = require('path')
const querystring = require('querystring')
const swig = require('swig')

const { get:getItems,add:addItem,del:delItem } = require('../Model/item.js')

class Controller{
    //index其实就是一个action
    index(req,res,...args){
        //1.获取数据
        getItems()
        .then(data=>{
            //将数据分配到页面并返回页面
            const filePath = path.normalize(__dirname+"/../View/Item/index.html")
            //引入模版
            const template = swig.compileFile(filePath)
            
            const html = template({
                data:data
            })
            res.setHeader('Content-type',"text/html;charset=UTF-8")
            res.end(html) 
        })
        .catch(err=>{
            console.log('err:',err)
            res.setHeader('Content-type',"text/html;charset=UTF-8")
            res.statusCode = 404
            res.end('<h1>请求出错了</h1>')
        })
    }
    add(req,res,...args){
        //1.获取参数
        let body = ''
        req.on('data',(chunk)=>{
            body+=chunk
        })
        req.on('end',()=>{
            const query = querystring.parse(body)
            //2.根据参数生成任务对象并且写入到文件中
            addItem(query.task)
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
    del(req,res,...args){
        //1.获取参数
        const id = args[0]
        //2.根据参数删除任务对象并且更改文件
        delItem(id)
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
}



module.exports = new Controller()