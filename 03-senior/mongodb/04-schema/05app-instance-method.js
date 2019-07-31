/*
 * @Author: TomChen
 * @Date:   2019-07-29 16:01:56
 * @Last Modified by:   TomChen
 * @Last Modified time: 2019-07-31 11:54:01
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
    //构建测试数据
    //构建用户
    /*
    UserModel.insertMany({
        name:"Tom",
        age:'88',
        major:"Art",
        phone:'13212344321'
    })
    .then(docs=>{
        console.log('insert users:',docs)
    })
    .catch(err=>{
        console.log('insert users err:',err.message)
    })
    */
/*   
    BlogModel.insertMany([{
        title:"blog1",
        content:"blog1 content",
        author:"5d410d26f465910f0a8acfaf"
    },{
        title:"blog2",
        content:"blog2 content",
        author:"5d410d26f465910f0a8acfaf"
    }])
    .then(docs=>{
        console.log('insert blogs:',docs)
    })
    .catch(err=>{
        console.log('insert blogs err:',err.message)
    })
*/
    //根据姓名找到第一个用户的所有文章
/*
    UserModel.findOne({name:"Tom"},(err,user)=>{
        if(err){
            console.log('find user err:',err)
        }else{
            // console.log(user)
            BlogModel.find({author:user._id},(err,blogs)=>{
                if(err){
                    console.log('find blogs err:',err)
                }else{
                    console.log(blogs)
                }
            })
        }
    })
*/    
    UserModel.findOne({name:"Tom"},(err,user)=>{
        if(err){
            console.log('find user err:',err)
        }else{
            user.findBlogs((err,blogs)=>{
                if(err){
                    console.log('find blogs err:',err)
                }else{
                    console.log(blogs)
                }                
            })
        }
    })








})