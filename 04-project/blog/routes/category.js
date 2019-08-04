/*
* @Author: TomChen
* @Date:   2019-08-01 15:30:57
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-04 17:44:10
*/
const express = require('express')
const CategoryModel = require('../models/category.js')
const pagination = require('../util/pagination.js')

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
    let page = req.query.page
    const options = {
        page:req.query.page,
        model:CategoryModel,
        query:{},
        sort:{order:-1},
        projection:"-__v"
    }
    pagination(options)
    .then(data=>{
        res.render("admin/category_list",{
            userInfo:req.userInfo,
            categories:data.docs,
            page:data.page,
            list:data.list,
            pages:data.pages,
            url:"/category"
        })       
    })
    .catch(err=>{
       console.log('get categories err:',err) 
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
    const { name,order } = req.body
    CategoryModel.findOne({name:name})
    .then(category=>{
        if(category){
            res.render("admin/err",{
                message:"分类已经存在",
                url:'/category'
            })
        }else{
            CategoryModel.insertMany({name:name,order:order})
            .then(categories=>{
                res.render("admin/success",{
                    message:"新增分类成功",
                })
            })
            .catch(err=>{
                let message = "数据库操作失败"
                if(err.errors['name'].message){
                    message = err.errors['name'].message
                }
                res.render("admin/err",{
                    message:message,
                    url:'/category'
                })
            })
        }
    })
    .catch(err=>{
        res.render("admin/err",{
            message:"数据库操作失败",
            url:'/category'
        })
    })

})












module.exports = router