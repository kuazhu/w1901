/*
 * @Author: TomChen
 * @Date:   2019-07-29 16:01:56
 * @Last Modified by:   TomChen
 * @Last Modified time: 2019-07-29 17:38:53
 */
const mongoose = require('mongoose')

//1.连接数据库
mongoose.connect('mongodb://localhost/kuazhu', { useNewUrlParser: true })

//获取db对象
const db = mongoose.connection

//连接数据库失败
db.on('error', () => {
    console.log('connection db error')
    throw 'connection db error'
})

db.once('open', () => {
    //1.定义Schema
    const UserSchema = new mongoose.Schema({
        name: String,
        age: Number,
        major: String
    })
    //2.根据Schema定义数据模型
    //2.1 model方法第一个参数指定集合名称,mongoose会默认转换为复数
    //2.2 model方法第二个参数指定Schema
    const UserModel = mongoose.model('user', UserSchema);

    //3.使用模型(CRUD)
    //3.2 查找
    /*
    UserModel.find({},(err,docs)=>{
         if(err){
             console.log('find user error:',err)
         }else{
             console.log(docs)
         }    
    })
    */
    /* 
   UserModel.find({age:{$gt:140}},(err,docs)=>{
        if(err){
            console.log('find user error:',err)
        }else{
            console.log(docs)
        }    
   }) 
  */
   /* 
    UserModel.find({ age: { $gt: 140 } },"name age -_id", (err, docs) => {
        if (err) {
            console.log('find user error:', err)
        } else {
            console.log(docs)
        }
    })
    */
   /*
    UserModel.find({ age: { $gt: 140 } },"name age -_id",{limit:1}, (err, docs) => {
        if (err) {
            console.log('find user error:', err)
        } else {
            console.log(docs)
        }
    })
    */
    /*
    UserModel.find({ age: { $gt: 140 } },null,{limit:1}, (err, docs) => {
        if (err) {
            console.log('find user error:', err)
        } else {
            console.log(docs)
        }
    })
    */
    /*
    UserModel.find({ age: { $gt: 140 } },null,{skip:1}, (err, docs) => {
        if (err) {
            console.log('find user error:', err)
        } else {
            console.log(docs)
        }
    })
    */
    /* 
    UserModel.find({ age: { $gt: 140 } },null,{sort:{age:-1}}, (err, docs) => {
        if (err) {
            console.log('find user error:', err)
        } else {
            console.log(docs)
        }
    })
    */
    /*
    UserModel.findById("5d3eb9340fdcc10c57966f7d",(err,doc)=>{
        if (err) {
            console.log('find user error:', err)
        } else {
            console.log(doc)
        }       
    })
    */
    UserModel.findOne({ age: { $gt: 140 } },(err, doc) => {
        if (err) {
            console.log('find user error:', err)
        } else {
            console.log(doc)
        }
    })

})