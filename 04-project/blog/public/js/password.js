/*
* @Author: TomChen
* @Date:   2019-03-13 18:10:45
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-08 11:33:43
*/
;(function($){
    var passwordReg = /^\w{3,6}$/
    $('.btn-sub-password').on('click',function(){
        var password = $('[name="password"]').val()
        var repassword = $('[name="repassword"]').val()
        var $err = $('.err')
        if(!passwordReg.test(password)){
             $err.eq(0).html('密码为3-6位任意字符')
             return false
        }else{
            $err.eq(0).html('')
        }

        if(password != repassword){
            $err.eq(1).html('两次密码不一致')
            return false
        }else{
            $err.eq(1).html('')
        }
    })
})(jQuery);