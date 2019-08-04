/*
* @Author: TomChen
* @Date:   2019-08-01 15:30:57
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-04 11:56:11
*/
const express = require('express')
const UserModel = require('../models/user.js')

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

        UserModel.find({})
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
})


module.exports = router