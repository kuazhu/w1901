/*
* @Author: TomChen
* @Date:   2019-08-01 15:30:57
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-02 15:29:07
*/
const express = require('express')

const router = express.Router()

//显示首页
router.get('/', (req, res) => {
    //render方法作用: 
    //1.模版中block的替换
    //2.把替换后的html返回给客户端
    res.render("main/index",{
        userInfo:req.userInfo
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