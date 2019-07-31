/*
* @Author: TomChen
* @Date:   2019-07-31 09:25:35
* @Last Modified by:   TomChen
* @Last Modified time: 2019-07-31 09:26:51
*/
const mongoose = require('mongoose')

//1.定义Schema
const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
    major: String
})

//2.根据Schema定义数据模型
//2.1 model方法第一个参数指定集合名称,mongoose会默认转换为复数
//2.2 model方法第二个参数指定Schema
const UserModel = mongoose.model('user', UserSchema)

module.exports = UserModel