/*
* @Author: TomChen
* @Date:   2019-07-26 17:32:40
* @Last Modified by:   TomChen
* @Last Modified time: 2019-07-26 17:43:24
*/
const crypto = require('crypto')
//md5 加密算法->不可逆
// const hash = crypto.createHash('md5')
// const hash = crypto.createHash('sha256')
// const hash = crypto.createHash('sha512')


//添加需要加密的明文
//123456
hash.update('123456')

//输出密文
console.log(hash.digest('hex'))