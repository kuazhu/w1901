/*
* @Author: TomChen
* @Date:   2019-07-24 16:32:24
* @Last Modified by:   TomChen
* @Last Modified time: 2019-07-24 16:35:38
*/
const EventEmitter = require('events')

class CustomEmitter extends EventEmitter{

}

const emitter = new CustomEmitter()

const listener = ()=>{
    console.log('execute test fn1...')
}

emitter.on('test',listener)

//console.log(emitter.removeListener == emitter.off)//true

// emitter.removeListener('test',listener)
emitter.off('test',listener)

emitter.emit('test')








