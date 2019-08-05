/*
* @Author: TomChen
* @Date:   2019-08-01 15:30:57
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-05 17:55:53
*/
const express = require('express')
const CategoryModel = require('../models/category.js')

const router = express.Router()

async function getCommonData(){
    const categoriesPromise = CategoryModel.find({},"name").sort({order:-1})
    const categories = await categoriesPromise
    return {
        categories
    }
}


//显示首页
router.get('/', (req, res) => {
    //render方法作用: 
    //1.模版中block的替换
    //2.把替换后的html返回给客户端
    getCommonData()
    .then(data=>{
        const { categories } = data
        res.render("main/index",{
            userInfo:req.userInfo,
            categories
        })
    })
})

//显示列表页
router.get('/list', (req, res) => {  
    res.render("main/list",{
        userInfo:req.userInfo
    })
})


//显示详情页
router.get('/detail', (req, res) => {
    res.render("main/detail",{
        userInfo:req.userInfo
    })
})

module.exports = router