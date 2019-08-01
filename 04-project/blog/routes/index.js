/*
* @Author: TomChen
* @Date:   2019-08-01 15:30:57
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-01 15:36:35
*/
const express = require('express')

const router = express.Router()

//显示首页
router.get('/', (req, res) => {
    res.render("main/index")
})

//显示列表页
router.get('/list', (req, res) => {
    res.render("main/list")
})


//显示详情页
router.get('/detail', (req, res) => {
    res.render("main/detail")
})

module.exports = router