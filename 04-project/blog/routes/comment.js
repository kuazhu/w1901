/*
* @Author: TomChen
* @Date:   2019-08-01 15:30:57
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-07 17:55:32
*/
const express = require('express')
const CommentModel = require('../models/comment.js')

const router = express.Router()
//权限验证
router.use((req,res,next)=>{
    if(req.userInfo._id){
        next()
    }else{
        res.send('<h1>请登录账号</h1>')
    }
})

router.post("/add",(req,res)=>{
    const { content,article } = req.body
    CommentModel.insertMany({
        content,
        article,
        user:req.userInfo._id
    })
    .then(commnets=>{
        CommentModel.getPaginationCommentsData(req)
        .then(data=>{
            res.json({
                status:0,
                message:"添加评论成功",
                data:data
            })
        })
        .catch(err=>{
            res.json({
                status:10,
                message:"添加评论失败"
            })
        })
    })
    .catch(err=>{
        res.json({
            status:10,
            message:"添加评论失败"
        })
    })    

})


module.exports = router