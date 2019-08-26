/*
* @Author: TomChen
* @Date:   2019-08-26 16:53:39
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-26 17:01:46
*/
var api = require('api')
var _util = require('util')
var modalTpl = require('./modal.tpl')
module.exports = {
    show:function(){
        this.$elem = $('.modal-box')
        this.loadModal()
        this.bindEvent()
    },
    loadModal:function(){
        var html = _util.render(modalTpl)
        this.$elem.html(html)
    },
    hideModal:function(){
        this.$elem.empty()
    },
    bindEvent:function(){
        var _this = this
        //1.关闭弹出面板
        this.$elem.on('click','.close',function(){
            _this.hideModal()
        })
        //组织事件冒泡为了点击弹出面包中的其他地方不触发顶层的关闭事件
        this.$elem.on('click','.modal-container',function(ev){
            ev.stopPropagation()
        })        
    }
}