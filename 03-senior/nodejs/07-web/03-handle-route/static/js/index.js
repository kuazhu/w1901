/*
* @Author: TomChen
* @Date:   2019-07-25 15:17:42
* @Last Modified by:   TomChen
* @Last Modified time: 2019-07-25 17:04:04
*/
;(function($){
    var $input = $('.todo-input')
    $input.on('keydown',function(ev){
        if(ev.keyCode == 13){
            //发送ajax
            $.ajax({
                url:"/add",
                type:'post',
                dataType:'json',
                data:{
                    task:$input.val()
                },
                success:function(result){
                    console.log(result)
                }

            })
        }
    })
})(jQuery)