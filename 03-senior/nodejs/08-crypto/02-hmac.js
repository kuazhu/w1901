/*
* @Author: TomChen
* @Date:   2019-07-26 17:32:40
* @Last Modified by:   TomChen
* @Last Modified time: 2019-07-26 17:45:34
*/
const crypto = require('crypto')
const hmac = crypto.createHmac('sha512','sdfdsfjdslk12321')

//添加需要加密的明文
//123456
hmac.update('123456')

//输出密文
console.log(hmac.digest('hex'))