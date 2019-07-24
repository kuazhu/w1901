/*
* @Author: TomChen
* @Date:   2019-07-24 16:27:16
* @Last Modified by:   TomChen
* @Last Modified time: 2019-07-24 16:30:15
*/
const EventEmitter = require('events')

class CustomEmitter extends EventEmitter{

}

const emitter = new CustomEmitter()

emitter.on('test',(arg1,arg2)=>{
    console.log('get arg1:',arg1)
    console.log('get arg2:',arg2)
})

//emitter.emit('test','aa','bb')
const args = ['bb','cc']
emitter.emit('test',...args)