/*
* @Author: TomChen
* @Date:   2019-08-01 15:30:57
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-08 09:15:56
*/
const express = require('express')
const CategoryModel = require('../models/category.js')
const ArticleModel = require('../models/article.js')
const CommentModel = require('../models/comment.js')

const router = express.Router()

async function getCommonData(){
    const categoriesPromise = CategoryModel.find({},"name").sort({order:-1})
    const topArticlesPromise = ArticleModel.find({},"click title").sort({click:-1}).limit(10)
    const categories = await categoriesPromise
    const topArticles = await topArticlesPromise
    return {
        categories,
        topArticles
    }
}


//显示首页
router.get('/', (req, res) => {
    //render方法作用: 
    //1.模版中block的替换
    //2.把替换后的html返回给客户端
    getCommonData()
    .then(data=>{
        const { categories,topArticles } = data
        ArticleModel.getPaginationArticlesData(req)
        .then(data=>{
            res.render("main/index",{
                userInfo:req.userInfo,
                categories,
                topArticles,
                //首页文章分页数据
                articles:data.docs,
                page:data.page,
                list:data.list,
                pages:data.pages,
            })
        })
    })
})
//处理文章分页数据的ajax请求
router.get('/articles', (req, res) => {
    const id = req.query.id
    const query = {}
    if(id){
        query.category = id
    }
    ArticleModel.getPaginationArticlesData(req,query)
    .then(data=>{
        res.json({
            status:0,
            message:"获取文章数据成功",
            data:data
        })
    })
    .catch(err=>{
        res.json({
            status:10,
            message:"获取文章数据失败"
        })        
    })
})


//显示列表页
router.get('/list/:id', (req, res) => {
    const id = req.params.id
    getCommonData()
    .then(data=>{
        const { categories,topArticles } = data
        ArticleModel.getPaginationArticlesData(req,{category:id})
        .then(data=>{
            res.render("main/list",{
                userInfo:req.userInfo,
                categories,
                topArticles,
                //首页文章分页数据
                articles:data.docs,
                page:data.page,
                list:data.list,
                pages:data.pages,
                //回传分类id
                currentCategoryId:id
            })
        })
    })    
})

async function getDetailData(req){
    
    const id = req.params.id

    const commonDataPromise = getCommonData()
    const articlePromise = ArticleModel.findOneAndUpdate({_id:id},{$inc:{click:1}},{new:true})
                               .populate({path: 'user', select: 'username' })
                               .populate({path: 'category', select: 'name'})
    const commentPageDataPromise = CommentModel.getPaginationCommentsData(req,{article:id})
    
    const commonData = await commonDataPromise
    const article = await articlePromise
    const commentPageData = await commentPageDataPromise
    
    const { categories,topArticles } = commonData
    
    return {
        categories,
        topArticles,
        article,
        commentPageData
    }
}

//显示详情页
router.get('/detail/:id', (req, res) => {
    getDetailData(req)
    .then(data=>{
        const {categories,topArticles,article,commentPageData } = data
        res.render("main/detail",{
            userInfo:req.userInfo,
            categories,
            topArticles,
            article,
            //首次的评论数据
            comments:commentPageData.docs,
            page:commentPageData.page,
            list:commentPageData.list,
            pages:commentPageData.pages,
            currentCategoryId:article.category._id
        })        
    })

})

module.exports = router