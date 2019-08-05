/*
* @Author: TomChen
* @Date:   2019-07-31 09:42:47
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-05 11:05:28
*/
const mongoose = require('mongoose')

//1.定义Schema
const ArticleSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"文章标题必须输入"],
    },
    intro:{
        type:String,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'category'        
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    click:{
        type:Number,
        default:0
    },
    content:{
        type:String
    }

})

const ArticleModel = mongoose.model('article', ArticleSchema)

module.exports = ArticleModel