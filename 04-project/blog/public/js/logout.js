/*
* @Author: TomChen
* @Date:   2019-03-13 18:10:45
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-02 17:53:24
*/
;(function($){
    $('#logout').on('click',function(){
        $.ajax({
            url:'/user/logout'
        })
        .done(function(result){
            window.location.href = "/"
        })
        .fail(function(err){
            alert("请求失败,请稍后再试")
        })
    })
})(jQuery);