/*
* @Author: TomChen
* @Date:   2019-07-25 09:08:34
* @Last Modified by:   TomChen
* @Last Modified time: 2019-07-25 10:41:30
*/
const fs = require('fs')
const util = require('util')

//1.同步

/*
//1.1 逐步操作
//1.1.1 打开文件
const fd = fs.openSync('./01.txt','r')
//1.1.2 读出文件内容
const buf = Buffer.alloc(100)
// console.log(buf)
fs.readSync(fd,buf,0,50,0)
console.log(buf)
console.log(buf.toString())
//1.1.3 关闭文件
fs.closeSync(fd)
*/

//1.2 合并操作
//const data = fs.readFileSync('./01.txt',{encoding:'utf8'})
//console.log(data)


//2.异步
/*
//2.1 逐步操作
//2.1.1 打开文件
fs.open('./01.txt','r',(err,fd)=>{
    if(err){
        console.log('open file err:',err)
    }else{
        //2.1.2 读出文件内容
        const buf = Buffer.alloc(100)
        fs.read(fd,buf,0,50,0,(err)=>{
            if(err){
                console.log('read file err:',err)
            }else{
                console.log(buf)
            }
            //2.1.3 关闭文件
            fs.close(fd,err=>{
                if(err){
                    console.log('close file error:',err)
                }else{
                    console.log('close file success')
                }                
            })            
        })
    }
})
*/
          
//2.2 合并操作
/*
fs.readFile('./01.txt',{flag:'r',encoding:'utf8'},(err,data)=>{
    if(err){
        console.log('read file err:',err)
    }else{
        console.log(data)
    }
})
*/

//3.promise处理异步
const readFile = util.promisify(fs.readFile)

readFile('./01.txt',{flag:'r',encoding:'utf8'})
.then(data=>{
    console.log(data) 
})
.catch(err=>{
    console.log('read file err:',err)    
})





















