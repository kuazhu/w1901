/*
* @Author: TomChen
* @Date:   2019-08-21 17:42:33
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-22 15:22:25
*/
require('pages/common/logo')
require('pages/common/footer')

require('./index.css')

var _util = require('util')

var page = {
    init:function(){
        this.bindEvent()
    },
    bindEvent:function(){
        var _this = this
        $('#btn-submit').on('click',function(){
            _this.submit()
        })
        $('input').on('keyup',function(ev){
            if(ev.keyCode == 13){
                _this.submit()
            }
        })
    },
    submit:function(){
        //1.获取数据
        var formData = {
            username:$.trim($('[name="username"]').val()),
            password:$.trim($('[name="password"]').val())
        }
        //2.校验数据
        var validateResult = this.validate(formData)
        //验证成功
        if(validateResult.status){
            $('.error-item')
            .hide()
            .find('.error-msg')
            .text('')
            //3.发送请求
        }
        //验证失败
        else{
            $('.error-item')
            .show()
            .find('.error-msg')
            .text(validateResult.msg)
        }
    },
    validate:function(formData){
        var result = {
            status:false,
            msg:''
        }
        //校验
        //用户名不能为空
        if(!_util.validate(formData.username,'require')){
            result.msg = "用户名不能为空"
            return result
        }
        //用户名格式验证
        if(!_util.validate(formData.username,'username')){
            result.msg = "用户名格式不正确"
            return result
        }
        //密码不能为空
        if(!_util.validate(formData.password,'require')){
            result.msg = "密码不能为空"
            return result
        }
        //密码格式验证
        if(!_util.validate(formData.password,'password')){
            result.msg = "密码格式不正确"
            return result
        }        
        result.status = true
        return result
    }
}

$(function(){
    page.init()
})
