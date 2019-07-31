/*
 * @Author: TomChen
 * @Date:   2019-07-29 16:01:56
 * @Last Modified by:   TomChen
 * @Last Modified time: 2019-07-31 15:07:46
 */
const mongoose = require('mongoose')

const UserModel = require('./models/user.js')
const BlogModel = require('./models/blog.js')

//1.连接数据库
mongoose.connect('mongodb://localhost/kuazhu', { useNewUrlParser: true })

//获取db对象
const db = mongoose.connection

//连接数据库失败
db.on('error', (err) => {
    console.log('connection db error:',err)
    throw err
})

db.once('open', () => {
    console.log('connection db success')
    //通过电话号码查找
/*
    UserModel.findOne({phone:"13212344321"},(err,user)=>{
        if(err){
            console.log('find user err:',err)
        }else{
            console.log(user)
        }
    })
*/
    UserModel.findByPhone("13212344321",(err,user)=>{
        if(err){
            console.log('find user err:',err)
        }else{
            console.log(user)
        }        
    })


})