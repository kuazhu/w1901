/*
* @Author: TomChen
* @Date:   2019-07-25 10:55:36
* @Last Modified by:   TomChen
* @Last Modified time: 2019-07-25 11:03:42
*/
const fs = require('fs')

const rs = fs.createReadStream('./rs.txt')

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