/*
* @Author: TomChen
* @Date:   2019-08-01 15:30:57
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-02 17:46:33
*/
const express = require('express')

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



module.exports = router