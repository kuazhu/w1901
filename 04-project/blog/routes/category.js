/*
* @Author: TomChen
* @Date:   2019-08-01 15:30:57
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-08 11:23:59
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
    res.render("admin/category_add_edit",{
        userInfo:req.userInfo
    })
})
//处理添加分类
router.post('/add', (req, res) => {
    let { name,order } = req.body
    if(!order){
        order = 0
    }
    CategoryModel.findOne({name:name})
    .then(category=>{
        if(category){
            res.render("admin/err",{
                userInfo:req.userInfo,
                userInfo:req.userInfo,
                message:"分类已经存在",
                url:'/category'
            })
        }else{
            CategoryModel.insertMany({name:name,order:order})
            .then(categories=>{
                res.render("admin/success",{
                    userInfo:req.userInfo,
                    message:"新增分类成功",
                })
            })
            .catch(err=>{
                let message = "数据库操作失败"
                if(err.errors['name'].message){
                    message = err.errors['name'].message
                }
                res.render("admin/err",{
                    userInfo:req.userInfo,
                    message:message,
                    url:'/category'
                })
            })
        }
    })
    .catch(err=>{
        res.render("admin/err",{
            userInfo:req.userInfo,
            message:"数据库操作失败",
            url:'/category'
        })
    })
})
//显示编辑分类的页面
router.get('/edit/:id', (req, res) => {
    const { id } = req.params
    CategoryModel.findById(id)
    .then(category=>{
        res.render("admin/category_add_edit",{
            userInfo:req.userInfo,
            category
        })
    })
    .catch(err=>{
        res.render("admin/err",{
            userInfo:req.userInfo,
            message:"数据库操作失败",
            url:'/category'
        })
    })    
})
//处理编辑分类
router.post("/edit",(req,res)=>{
    let { name,order,id } = req.body
    if(!order){
        order = 0
    }
    CategoryModel.findById(id)
    .then(category=>{
        if(category.name == name && category.order == order){
            res.render("admin/err",{
                userInfo:req.userInfo,
                message:"请更新后再提交",
            })            
        }else{
            CategoryModel.findOne({name:name,_id:{$ne:id}})
            .then(category=>{
                if(category){
                    res.render("admin/err",{
                        userInfo:req.userInfo,
                        message:"分类名称已经存在",
                    })  
                }else{
                    CategoryModel.updateOne({_id:id},{name,order})
                    .then(result=>{
                        res.render("admin/success",{
                            userInfo:req.userInfo,
                            message:"新增分类成功",
                            url:'/category'
                        })                        
                    })
                    .catch(err=>{
                        res.render("admin/err",{
                            userInfo:req.userInfo,
                            message:"数据库操作失败",
                        })
                    })                    
                }
            })
            .catch(err=>{
                res.render("admin/err",{
                    userInfo:req.userInfo,
                    message:"数据库操作失败",
                })
            })            
        }
    })
    .catch(err=>{
        res.render("admin/err",{
            userInfo:req.userInfo,
            message:"数据库操作失败",
        })
    })        
})
//处理删除操作
router.get('/delete/:id', (req, res) => {
    const { id } = req.params
    CategoryModel.deleteOne({_id:id})
    .then(result=>{
        res.render("admin/success",{
            userInfo:req.userInfo,
            message:"删除分类成功",
            url:'/category'
        })
    })
    .catch(err=>{
        res.render("admin/err",{
            userInfo:req.userInfo,
            message:"数据库操作失败",
            url:'/category'
        })
    })    
})












module.exports = router