/*
* @Author: TomChen
* @Date:   2019-07-24 16:47:35
* @Last Modified by:   TomChen
* @Last Modified time: 2019-07-24 16:50:47
*/
const EventEmitter = require('events')

class CustomEmitter extends EventEmitter{

}

const emitter = new CustomEmitter()

emitter.on('newListener',(enventName,cb)=>{
    console.log('execute newListener fn..')
    console.log('enventName:',enventName)
    cb()
})

//emitter.emit('newListener')
emitter.on('test1',()=>{
    console.log('execute test1 fn..')
})
emitter.on('test2',()=>{
    console.log('execute test2 fn..')
})