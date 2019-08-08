/*
* @Author: TomChen
* @Date:   2019-08-01 15:30:57
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-08 11:37:27
*/
const express = require('express')
const UserModel = require('../models/user.js')
const CommentModel = require('../models/comment.js')
const pagination = require('../util/pagination.js')
const hmac = require('../util/hmac.js')

const router = express.Router()
//权限验证
router.use((req,res,next)=>{
    if(req.userInfo.isAdmin){
        next()
    }else{
        res.send('<h1>请用管理员账号登录</h1>')
    }
})

//显示后台管理首页
router.get('/', (req, res) => {
    res.render("admin/index",{
        userInfo:req.userInfo
    })
})
//显示用户列表
router.get('/users', (req, res) => {
/*
    分页分析:
    前提条件:得知道获取第几页,前端发送参数 page
    约定:每一页显示多少条数据, 约定每页显示2条, limit = 2
    举例:
    1
    2
    3
    4
    5
    6
    第 1 页 显示 第 1,2, 跳过 0 条 skip(0) 取 2 条 limit(2)
    第 2 页 显示 第 3,4, 跳过 2 条 skip(2) 取 2 条 limit(2)
    第 3 页 显示 第 5,6, 跳过 4 条 skip(4) 取 2 条 limit(2)
    
    第 page 页, 跳过 (page-1)*limit 条

 */
/*  
    let page = req.query.page  
    const limit = 2
    page = parseInt(page)
    
    if(isNaN(page)){
        page = 1
    }

    //上一页边界值控制
    if(page == 0){
        page = 1
    }

    UserModel.countDocuments((err,count)=>{
        //总页数
        const pages = Math.ceil(count / limit)
        //下一页边界值控制
        if(page > pages){
            page = pages
        }
        //生成页码数组
        const list = []
        for(let i = 1;i<=pages;i++){
            list.push(i)
        }
        const skip = (page-1)*limit

        UserModel.find({},"-password -__v")
        .sort({_id:-1})
        .skip(skip)
        .limit(limit)
        .then(users=>{
            res.render("admin/user_list",{
                userInfo:req.userInfo,
                users:users,
                page:page,
                list:list,
                pages:pages
            })
        })
        .catch(err=>{
           console.log('get users err:',err) 
        })
    })
*/
    let page = req.query.page
    const options = {
        page:req.query.page,
        model:UserModel,
        query:{},
        sort:{_id:-1},
        projection:"-password -__v"
    }
    pagination(options)
    .then(data=>{
        res.render("admin/user_list",{
            userInfo:req.userInfo,
            users:data.docs,
            page:data.page,
            list:data.list,
            pages:data.pages,
            url:"/admin/users"
        })       
    })
    .catch(err=>{
       console.log('get users err:',err) 
    })        
})

//显示后台评论列表
router.get('/comments', (req, res) => {
    CommentModel.getPaginationCommentsData(req)
    .then(data=>{
        res.render("admin/comment_list",{
            userInfo:req.userInfo,
            comments:data.docs,
            page:data.page,
            list:data.list,
            pages:data.pages,
            url:"/admin/comments"
        }) 
    })
    .catch(err=>{
        console.log('get comments err:',err)
    })    
})

//处理删除操作
router.get('/comment/delete/:id', (req, res) => {
    const { id } = req.params
    CommentModel.deleteOne({_id:id})
    .then(result=>{
        res.render("admin/success",{
            userInfo:req.userInfo,
            message:"删除评论成功",
            url:'/admin/comments'
        })
    })
    .catch(err=>{
        res.render("admin/err",{
            userInfo:req.userInfo,
            message:"数据库操作失败",
            url:'/admin/comments'
        })
    })    
})

//显示修改密码页面
router.get('/password',(req,res)=>{
    res.render("admin/password",{
        userInfo:req.userInfo
    })
})
//处理修改密码
router.post('/password',(req,res)=>{
    const { password } = req.body
    UserModel.updateOne({_id:req.userInfo._id},{password:hmac(password)})
    .then(result=>{
        req.session.destroy()
        res.render("admin/success",{
            userInfo:req.userInfo,
            message:"修改密码成功,请重新登录",
            url:'/'
        })
    })
    .catch(err=>{
        res.render("admin/err",{
            userInfo:req.userInfo,
            message:"修改密码失败",
            url:'/admin/password'
        })
    })
})






module.exports = router