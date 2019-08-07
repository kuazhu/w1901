/*
* @Author: TomChen
* @Date:   2019-03-13 18:10:45
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-07 10:39:48
*/
;(function($){
    $.fn.extend({
        pagination:function(options){
            var $elem = this;
            $elem.on('click','a',function(){
                var $this = $(this)
                //获取当前页,根据当前页计算请求页码
                //1.获取当前页
                var currentPage = $elem.find('.active a').html()
                //2.根据当前页计算请求页码
                var page = 1
                var labelText = $this.attr('aria-label')
                if(labelText == "Previous"){
                    page = currentPage - 1
                }
                else if(labelText == "Next"){
                    page = currentPage*1 + 1
                }else{
                    page = $this.html()
                }
                //如果点击当前页阻止请求
                if(page == currentPage){
                    return false
                }
                $.ajax({
                    url:options.url+"?page="+page,
                    dataType:"json"
                })
                .done(function(result){
                    console.log(result)
                })
                .fail(function(err){
                    alert('请求失败,请稍后再试一试')
                })
            })
        }
    })
})(jQuery);