/*
* @Author: TomChen
* @Date:   2019-07-22 16:45:48
* @Last Modified by:   TomChen
* @Last Modified time: 2019-07-22 17:39:04
*/
//定义模块
console.log('in m5...')
const str = 'hello'

const fn = ()=>{
    console.log('fn...')
}

const obj = {
    name:'Tom',
    age:18
}
/*
console.log(exports)
console.log(module.exports)
console.log(module.exports == exports)
*/
/*
exports.str = str
exports.fn = fn
exports.obj = obj
*/
/*
module.exports.str = str
module.exports.fn = fn
module.exports.obj = obj
*/
/*
exports = {
    str,
    fn,
    obj
}
*/

module.exports = {
    str,
    fn,
    obj
}

/*
exports.str = str
module.exports = {
    fn,
    obj
}
*/






