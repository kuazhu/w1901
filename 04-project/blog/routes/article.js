/*
* @Author: TomChen
* @Date:   2019-08-01 15:30:57
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-08 11:22:47
*/
const express = require('express')

const multer  = require('multer')
const upload = multer({ dest: 'public/uploads/' })

const ArticleModel = require('../models/article.js')
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

//显示文章管理首页
router.get('/', (req, res) => {
    /*
    let page = req.query.page
    const options = {
        page:req.query.page,
        model:ArticleModel,
        query:{},
        sort:{_id:-1},
        projection:"-__v",
        populates:[{path: 'user', select: 'username' },{path: 'category', select: 'name'}]
    }
    pagination(options)
    */
    ArticleModel.getPaginationArticlesData(req)
    .then(data=>{
        res.render("admin/article_list",{
            userInfo:req.userInfo,
            articles:data.docs,
            page:data.page,
            list:data.list,
            pages:data.pages,
            url:"/article"
        })       
    })
    .catch(err=>{
       console.log('get articles err:',err) 
    })
})

//显示添加文章的页面
router.get('/add', (req, res) => {
    CategoryModel.find({},"name")
    .sort({order:-1})
    .then(categories=>{
        res.render("admin/article_add_edit",{
            userInfo:req.userInfo,
            categories
        })        
    })
})
//处理添加文章
router.post('/add', (req, res) => {
    const { title,category,intro,content } = req.body
    
    ArticleModel.insertMany({
        title,
        category,
        intro,
        content,
        user:req.userInfo._id
    })
    .then(articles=>{
        res.render("admin/success",{
            userInfo:req.userInfo,
            message:"新增文章成功",
            url:'/article'
        })
    })
    .catch(err=>{
        res.render("admin/err",{
            userInfo:req.userInfo,
            message:"数据库操作失败",
            url:'/article'
        })
    })
})

//处理文章上传图片
router.post('/uploadImage',upload.single('upload'),(req,res)=>{
    const uploadedFilePath = "/uploads/"+req.file.filename
    res.json({
        uploaded:true,
        url:uploadedFilePath        
    })
})


//显示编辑文章的页面
router.get('/edit/:id', (req, res) => {
    const { id } = req.params
    CategoryModel.find({},"name")
    .sort({order:-1})
    .then(categories=>{
        ArticleModel.findById(id)
        .then(article=>{
            res.render("admin/article_add_edit",{
                userInfo:req.userInfo,
                article,
                categories
            })
        })
        .catch(err=>{
            res.render("admin/err",{
                userInfo:req.userInfo,
                message:"数据库操作失败",
                url:'/article'
            })
        })       
    })
    .catch(err=>{
        res.render("admin/err",{
            userInfo:req.userInfo,
            message:"数据库操作失败",
            url:'/article'
        })
    })         
})
//处理编辑分类
router.post("/edit",(req,res)=>{
    let { title,category,intro,content,id } = req.body
    ArticleModel.updateOne({_id:id},{title,category,intro,content})
    .then(result=>{
        res.render("admin/success",{
            userInfo:req.userInfo,
            message:"编辑文章成功",
            url:'/article'
        })                        
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
    ArticleModel.deleteOne({_id:id})
    .then(result=>{
        res.render("admin/success",{
            userInfo:req.userInfo,
            message:"删除文章成功",
            url:'/article'
        })
    })
    .catch(err=>{
        res.render("admin/err",{
            userInfo:req.userInfo,
            message:"数据库操作失败",
            url:'/article'
        })
    })    
})


module.exports = router