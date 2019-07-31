/*
 * @Author: TomChen
 * @Date:   2019-07-29 16:01:56
 * @Last Modified by:   TomChen
 * @Last Modified time: 2019-07-31 15:38:41
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
    //根据名称查询博客的详细信息
/*
    BlogModel.findOne({title:"blog1"},(err,blog)=>{
        if(err){
            console.log('find blog err:',err)
        }else{
            // console.log(blog)
            const result = {}
            result.blog = blog
            UserModel.findById(blog.author,(err,user)=>{
                if(err){
                    console.log('find user err:',err)
                }else{
                    result.user = user
                    console.log(result)
                }
            })
        }
    })
*/
/*
    BlogModel.findOne({title:"blog1"})
    .populate('author',"name -_id")
    .then(data=>{
        console.log(data)
    })
*/

    BlogModel.findBlogs({})
    .then(data=>{
        console.log(data)
    })
})