/*
* @Author: TomChen
* @Date:   2019-08-01 15:30:57
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-08 11:44:32
*/
const express = require('express')
const UserModel = require('../models/user.js')
const CommentModel = require('../models/comment.js')
const pagination = require('../util/pagination.js')
const hmac = require('../util/hmac.js')

const router = express.Router()
//权限验证
router.use((req,res,next)=>{
    if(req.userInfo._id){
        next()
    }else{
        res.send('<h1>请登录账号</h1>')
    }
})

//显示后台用户中心首页
router.get('/', (req, res) => {
    res.render("home/index",{
        userInfo:req.userInfo
    })
})

//显示后台评论列表
router.get('/comments', (req, res) => {
    CommentModel.getPaginationCommentsData(req,{user:req.userInfo._id})
    .then(data=>{
        res.render("home/comment_list",{
            userInfo:req.userInfo,
            comments:data.docs,
            page:data.page,
            list:data.list,
            pages:data.pages,
            url:"/home/comments"
        }) 
    })
    .catch(err=>{
        console.log('get comments err:',err)
    })    
})

//处理删除操作
router.get('/comment/delete/:id', (req, res) => {
    const { id } = req.params
    CommentModel.deleteOne({_id:id,user:req.userInfo._id})
    .then(result=>{
        res.render("home/success",{
            userInfo:req.userInfo,
            message:"删除评论成功",
            url:'/home/comments'
        })
    })
    .catch(err=>{
        res.render("home/err",{
            userInfo:req.userInfo,
            message:"数据库操作失败",
            url:'/home/comments'
        })
    })    
})

//显示修改密码页面
router.get('/password',(req,res)=>{
    res.render("home/password",{
        userInfo:req.userInfo
    })
})
//处理修改密码
router.post('/password',(req,res)=>{
    const { password } = req.body
    UserModel.updateOne({_id:req.userInfo._id},{password:hmac(password)})
    .then(result=>{
        req.session.destroy()
        res.render("home/success",{
            userInfo:req.userInfo,
            message:"修改密码成功,请重新登录",
            url:'/'
        })
    })
    .catch(err=>{
        res.render("home/err",{
            userInfo:req.userInfo,
            message:"修改密码失败",
            url:'/home/password'
        })
    })
})






module.exports = router