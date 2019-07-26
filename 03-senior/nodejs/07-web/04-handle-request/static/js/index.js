/*
* @Author: TomChen
* @Date:   2019-07-25 15:17:42
* @Last Modified by:   TomChen
* @Last Modified time: 2019-07-26 09:49:19
*/
;(function($){
    var $input = $('.todo-input')
    $input.on('keydown',function(ev){
        if(ev.keyCode == 13){
            //1.发送ajax
            $.ajax({
                url:"/add",
                type:'post',
                dataType:'json',
                data:{
                    task:$input.val()
                },
                success:function(result){
                    //2.根据后台的返回结果做相应的处理
                    //2.1 成功的情况后台返回任务对象,根据任务对象生成DOM节点并且插入
                    //2.2 失败的情况弹出失败消息
                    console.log(result)
                }

            })
        }
    })
})(jQuery)