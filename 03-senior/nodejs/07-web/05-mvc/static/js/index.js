/*
* @Author: TomChen
* @Date:   2019-07-25 15:17:42
* @Last Modified by:   TomChen
* @Last Modified time: 2019-07-26 16:49:07
*/
;(function($){
    var $input = $('.todo-input')
    var $wrap = $('.todo-wrap')
    //添加
    $input.on('keydown',function(ev){
        if(ev.keyCode == 13){
            //1.发送ajax
            $.ajax({
                url:"/Item/add",
                type:'post',
                dataType:'json',
                data:{
                    task:$input.val()
                },
                success:function(result){
                    //2.根据后台的返回结果做相应的处理
                    //2.1 成功的情况后台返回任务对象,根据任务对象生成DOM节点并且插入
                    if(result.code == 0){
                        var data = result.data
                        var $dom = $(`<li class="todo-item" data-id="${data.id}">${data.task}</li>`)
                        $wrap.append($dom)
                        $input.val('')
                    }
                    //2.2 失败的情况弹出失败消息
                    else{
                        alert(result.message)
                    }
                }

            })
        }
    })
    //删除
    //注意:由于动态添加任务,所以需要用事件代理
    $wrap.on('click','li',function(){
        var $this = $(this)
        $.ajax({
            url:'/Item/del/'+$this.data('id'),
            dataType:'json',
            success:function(result){
                //2.根据后台的返回结果做相应的处理
                //2.1处理成功,移除当前dom节点
                if(result.code == 0){
                    $this.remove()
                }
                else{
                    alert(result.message)
                }
                //2.2处理失败,弹出失败消息
            }
        })

    })
})(jQuery)