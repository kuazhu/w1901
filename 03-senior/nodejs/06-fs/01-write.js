/*
* @Author: TomChen
* @Date:   2019-07-25 09:08:34
* @Last Modified by:   TomChen
* @Last Modified time: 2019-07-25 09:56:54
*/
const fs = require('fs')
const util = require('util')

//1.同步

/*
//1.1 逐步操作

//1.1.1 打开文件
const fd = fs.openSync('./01.txt','a')
//1.1.2 写入文件
fs.writeSync(fd,'hello')
//1.1.3 关闭文件
fs.closeSync(fd)
*/

//1.2 合并操作
//fs.writeFileSync('./01.txt','hello',{flag:'a'})

/*
//2.异步
//2.1 逐步操作
//2.1.1 打开文件
fs.open('./01.txt','w',(err,fd)=>{
    if(err){
        console.log('open file error:',err)
    }else{
        //2.1.2 写入文件
        // console.log(fd)
        fs.write(fd,'hello',(err)=>{
            if(err){
                console.log('write file error:',err)
            }else{
                console.log('write file success')
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
/*
//2.2 合并操作
fs.writeFile('./01.txt','hello',{flag:'w'},err=>{
    if(err){
        console.log('write file error:',err)
    }else{
        console.log('write file success')
    }
})

console.log('do something after write file...')
*/
//3.promise处理异步

const writeFile = util.promisify(fs.writeFile)

writeFile('./01.txt','hello',{flag:'a'})
.then(data=>{
    console.log('write file success')
})
.catch(err=>{
    console.log('write file error:',err)
})















