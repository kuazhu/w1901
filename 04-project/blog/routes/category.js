/*
* @Author: TomChen
* @Date:   2019-08-01 15:30:57
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-04 16:11:54
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

//显示分类管理首页
router.get('/', (req, res) => {
    res.render("admin/category_list",{
        userInfo:req.userInfo
    })
})

//显示添加分类的页面
router.get('/add', (req, res) => {
    res.render("admin/category_add",{
        userInfo:req.userInfo
    })
})
//处理添加分类
router.post('/add', (req, res) => {
    


})












module.exports = router