/*
* @Author: TomChen
* @Date:   2019-07-29 16:01:56
* @Last Modified by:   TomChen
* @Last Modified time: 2019-07-29 16:16:51
*/
const mongoose = require('mongoose')

//1.连接数据库
mongoose.connect('mongodb://localhost/kuazhu', {useNewUrlParser: true})

//获取db对象
const db = mongoose.connection

//连接数据库失败
db.on('error',()=>{
    console.log('connection db error')
    throw 'connection db error'
})

db.once('open',()=>{
    //1.定义Schema
    const UserSchema = new mongoose.Schema({
        name: String,
        age:Number,
        major:String
    })
    //2.根据Schema定义数据模型
    //2.1 model方法第一个参数指定集合名称,mongoose会默认转换为复数
    //2.2 model方法第二个参数指定Schema
    const UserModel = mongoose.model('user', UserSchema);

    //3.使用模型(CRUD)
    //3.1 新增
    const user = new UserModel({name:"Tom",age:18,major:"Computer"})
    user.save((err,doc)=>{
        if(err){
            console.log('save user error:',err)
        }else{
            console.log(doc)
        }
    })

})