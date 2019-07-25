/*
* @Author: TomChen
* @Date:   2019-07-25 10:55:36
* @Last Modified by:   TomChen
* @Last Modified time: 2019-07-25 10:58:55
*/
const fs = require('fs')

const ws = fs.createWriteStream('./ws.txt')

ws.on('open',()=>{
    console.log('write stream open...')
})
ws.on('close',()=>{
    console.log('write stream close..')
})
ws.on('finish',()=>{
    console.log('write data end')
})

ws.write('hello')
ws.write('good')
ws.end()