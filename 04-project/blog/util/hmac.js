/*
* @Author: TomChen
* @Date:   2019-08-01 17:49:19
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-01 17:50:23
*/
const crypto = require('crypto')
module.exports = (str)=>{
    const hmac = crypto.createHmac('sha512','sdfdsfjdslk12321')
    hmac.update(str)
    return hmac.digest('hex')
}