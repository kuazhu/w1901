/*
* @Author: TomChen
* @Date:   2019-07-31 09:42:47
* @Last Modified by:   TomChen
* @Last Modified time: 2019-07-31 09:55:39
*/
const mongoose = require('mongoose')

//1.定义Schema
const UserSchema = new mongoose.Schema({
    name:{
        type:String
    },
    age:{
        type:Number
    },
    major:{
        type:String
    },
    phone:{
        type:String
    },
    isLocked:{
        type:Boolean
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
    friends:{
        type:Array
    }
})

//2.根据Schema定义数据模型
//2.1 model方法第一个参数指定集合名称,mongoose会默认转换为复数
//2.2 model方法第二个参数指定Schema
const UserModel = mongoose.model('user', UserSchema)

module.exports = UserModel