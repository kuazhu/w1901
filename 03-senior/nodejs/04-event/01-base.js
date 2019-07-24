/*
* @Author: TomChen
* @Date:   2019-07-24 15:49:48
* @Last Modified by:   TomChen
* @Last Modified time: 2019-07-24 15:54:08
*/
const EventEmitter = require('events')

/*
const emitter = new EventEmitter()

//事件绑定
emitter.on('test',()=>{
    console.log('execute test fn...')
})
//事件触发
emitter.emit('test')
*/
// console.log(EventEmitter)

class CustomEmitter extends EventEmitter{

}

const emitter = new CustomEmitter()

emitter.on('test',()=>{
    console.log('execute test fn....')
})
emitter.emit('test')











