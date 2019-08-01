/*
* @Author: TomChen
* @Date:   2019-07-31 09:42:47
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-01 17:52:07
*/
const mongoose = require('mongoose')

//1.定义Schema
const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"姓名必须输入"],
        minlength:[3,"用户名最小长度为3个字符"],
        maxlength:[10,"用户名最大长度为10个字符"]
    },
    password:{
        type:String,
        required:[true,"密码必须输入"]
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})

const UserModel = mongoose.model('user', UserSchema)

module.exports = UserModel