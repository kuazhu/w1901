/*
* @Author: TomChen
* @Date:   2019-03-13 18:10:45
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-02 17:51:59
*/
//js文件保存在服务器端,但是最终会被请求到客户端,由客户端来解析执行
;(function($){
    //1.登录注册面板的切换
    var $register = $('#register')
    var $login = $('#login')

    //1.1 从登录面板到注册面板
    $('#go-register').on('click',function(){
        $login.hide()
        $register.show()
    })
    //1.2 从注册面板到登录面板
    $('#go-login').on('click',function(){
        $register.hide()
        $login.show()        
    })
    //用户名以字母开头包含数字和下划线的3-10位字符
    var usernameReg = /^[a-z][a-z0-9_]{2,9}$/i
    //密码为3-6位任意字符
    var passwordReg = /^\w{3,6}$/
    //2.注册
    $('#sub-register').on('click',function(){
        //2.1 获取表单数据
        var username = $register.find('[name=username]').val()
        var password = $register.find('[name=password]').val()
        var repassword = $register.find('[name=repassword]').val()
        //2.2 验证
        var errMsg = ''
        var $err = $register.find('.err')

        if(!usernameReg.test(username)){
            errMsg = '用户名以字母开头包含数字和下划线的3-10位字符'
        }
        else if(!passwordReg.test(password)){
            errMsg = '密码为3-6位任意字符'
        }
        else if(password != repassword){
            errMsg = '两次密码不一致'
        }
        //验证不通过
        if(errMsg){
            $err.html(errMsg)
            return
        }
        //验证通过
        else{
            $err.html('')
            //2.3 发送ajax请求
            $.ajax({
                url:'/user/register',
                type:'POST',
                dateType:'json',
                data:{
                    username:username,
                    password:password
                }
            })
            .done(function(result){
                if(result.status == 0){//成功
                    $('#go-login').trigger('click')
                }else{//失败
                    $err.html(result.message)
                }
            })
            .fail(function(err){
                $err.html("请求失败,请稍后再试")
            })
        }
    })
    //3.登录
    $('#sub-login').on('click',function(){
        //3.1 获取表单数据
        var username = $login.find('[name=username]').val()
        var password = $login.find('[name=password]').val()
        //3.2 验证
        var errMsg = ''
        var $err = $login.find('.err')

        if(!usernameReg.test(username)){
            errMsg = '用户名以字母开头包含数字和下划线的3-10位字符'
        }
        else if(!passwordReg.test(password)){
            errMsg = '密码为3-6位任意字符'
        }
        //验证不通过
        if(errMsg){
            $err.html(errMsg)
            return
        }
        //验证通过
        else{
            $err.html('')
            //3.3 发送ajax请求
            $.ajax({
                url:'/user/login',
                type:'POST',
                dateType:'json',
                data:{
                    username:username,
                    password:password
                }
            })
            .done(function(result){
                if(result.status == 0){//成功
                /*
                    $login.hide()
                    $('#user-info span').html(result.data.username)
                    $('#user-info').show()
                */
                    window.location.reload()
                }else{//失败
                    $err.html(result.message)
                }
            })
            .fail(function(err){
                $err.html("请求失败,请稍后再试")
            })
        }
    })
})(jQuery);