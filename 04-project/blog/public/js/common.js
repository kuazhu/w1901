/*
* @Author: TomChen
* @Date:   2019-03-13 18:10:45
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-07 11:32:17
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
    //4.处理文章列表分页功能
    var $articlePage = $('#article-page')
    function buildArticleHtml(articles){
        var html = ''
        articles.forEach(function(article){
            var createdTime = moment(article.createdAt).format('YYYY-MM-DD HH:mm:ss')
            html += `
              <div class="panel panel-default content-item">
                <div class="panel-heading">
                  <h3 class="panel-title">
                    <a href="/detail/${article._id.toString()}" class="link" target="_blank">${article.title}</a>
                  </h3>
                </div>
                <div class="panel-body">
                  ${ article.intro }
                </div>
                <div class="panel-footer">
                  <span class="glyphicon glyphicon-user"></span>
                  <span class="panel-footer-text text-muted">${ article.user.username }</span>
                  <span class="glyphicon glyphicon-th-list"></span>
                  <span class="panel-footer-text text-muted">${ article.category.name }</span>
                  <span class="glyphicon glyphicon-time"></span>
                  <span class="panel-footer-text text-muted">${ createdTime }</span>
                  <span class="glyphicon glyphicon-eye-open"></span>
                  <span class="panel-footer-text text-muted"><em>${ article.click }</em>已阅读</span>
                </div>
              </div>
            `
        })    
        return html;
    }
    $articlePage.on('get-data',function(ev,data){
        console.log(data.docs)
        //构建文章html
        $('#article-wrap').html(buildArticleHtml(data.docs))
    })
    $articlePage.pagination({
        url:'/articles'    
    })








})(jQuery);