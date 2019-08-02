/*
* @Author: TomChen
* @Date:   2019-08-01 15:30:57
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-02 17:05:46
*/
const express = require('express')
const UserModel = require('../models/user.js')
const hmac = require('../util/hmac.js')


const router = express.Router()

//注册
router.post('/register', (req, res) => {
    //1.获取参数
    const { username,password } = req.body
    //2.同名验证
    UserModel.findOne({username:username})
    .then(user=>{
        //已有同名用户
        if(user){
            res.json({
                status:10,
                message:"该用户名已经存在,请换一个"
            })            
        }
        //没有同名用户
        else{
            //3.插入数据
            UserModel.insertMany({
                username:username,
                password:hmac(password),
                // isAdmin:true
            })
            .then(user=>{
                res.json({
                    status:0,
                    message:"注册成功",
                    data:user
                })                  
            })
            .catch(err=>{
                throw err
            })
        }
    })
    .catch(err=>{
        console.log("insert user:",err)
        res.json({
            status:10,
            message:"服务器端错误,请稍后再试"
        })          
    })
})
//登录
router.post('/login', (req,res)=>{
    //1.获取参数
    const { username,password } = req.body
    //2.验证
    UserModel.findOne({username:username,password:hmac(password)},"-password -__v")
    .then(user=>{
        //验证成功
        if(user){
            //生成cookie并且返回给前端
            //req.cookies.set('userInfo',JSON.stringify(user),{maxAge:1000*60*60*24})
            //添加session
            req.session.userInfo = user
            res.json({
                status:0,
                message:"登录成功",
                data:user
            }) 
        }
        //验证失败
        else{
            res.json({
                status:10,
                message:"用户名和密码错误"
            })
        }
    })
    .catch(err=>{
        console.log("insert user:",err)
        res.json({
            status:10,
            message:"服务器端错误,请稍后再试"
        })          
    })        

})
//退出登录
router.get('/logout',(req,res)=>{
    //req.cookies.set('userInfo',null)
    req.session.destroy()
    res.json({
        status:0,
        message:"退出登录成功"
    })    
})


module.exports = router