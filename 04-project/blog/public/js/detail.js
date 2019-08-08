/*
* @Author: TomChen
* @Date:   2019-03-13 18:10:45
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-08 10:29:24
*/
;(function($){
    $('.btn-sub-comment').on('click',function(){
        var val = $('#comment-content').val()
        var content = val.trim()
        var $err = $('.err')
        if(!content){
            $err.html('请输入评论内容')
            return false
        }
        else if(content.length > 100){
            $err.html('评论内容最多100个字符')
            return false            
        }else{
            $err.html('')
        }
        var id = $(this).data('id')
        $.ajax({
            url:'/comment/add',
            type:'post',
            dataType:"json",
            data:{
                content:content,
                article:id
            }
        })
        .done(function(result){
            if(result.status == 0){
                $('#comment-content').val('')
                $('#comment-page').trigger('get-data',result.data)
            }else{
                alert(result.message)
            }
        })
        .fail(function(err){
            alert('评论失败,请稍后再试一试')
        })







    })
})(jQuery);