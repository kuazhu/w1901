/*
* @Author: TomChen
* @Date:   2019-07-25 11:05:54
* @Last Modified by:   TomChen
* @Last Modified time: 2019-07-25 11:08:58
*/
const fs = require('fs')

const rs = fs.createReadStream('./a.mov')

const ws = fs.createWriteStream('./b.mov')

/*
rs.on('open',()=>{
    console.log('read stream open...')
})
rs.on('close',()=>{
    console.log('read stream close..')
})
rs.on('end',()=>{
    console.log('read stream end')
})
rs.on('data',(chunk)=>{
    console.log('chunk:',chunk)
})
*/
rs.pipe(ws)





