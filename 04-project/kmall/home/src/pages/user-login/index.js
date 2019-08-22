/*
* @Author: TomChen
* @Date:   2019-08-21 17:42:33
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-22 11:52:15
*/
require('pages/common/logo')
require('pages/common/footer')

require('./index.css')


var page = {
    init:function(){
        this.bindEvent()
    },
    bindEvent:function(){
        var _this = this
        $('#btn-submit').on('click',function(){
            _this.submit()
        })
        $('input').on('keyup',function(ev){
            if(ev.keyCode == 13){
                _this.submit()
            }
        })
    },
    submit:function(){
        //1.获取数据
        //2.校验数据
        //3.发送请求
    }
}

$(function(){
    page.init()
})
