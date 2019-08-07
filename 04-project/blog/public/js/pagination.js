/*
* @Author: TomChen
* @Date:   2019-03-13 18:10:45
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-07 16:10:23
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
                var url = options.url+"?page="+page
                var id = $elem.data('id')
                if(id){
                    url = url + "&id="+id
                }
                $.ajax({
                    url:url,
                    dataType:"json"
                })
                .done(function(result){
                    if(result.status == 0){
                        $elem.trigger('get-data',result.data)
                    }else{
                       alert('请求失败,请稍后再试一试') 
                    }
                })
                .fail(function(err){
                    alert('请求失败,请稍后再试一试')
                })
            })
        }
    })
})(jQuery);