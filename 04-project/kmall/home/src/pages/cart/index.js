/*
* @Author: TomChen
* @Date:   2019-08-21 17:42:33
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-26 10:21:41
*/
require('pages/common/nav')
require('pages/common/search')
require('pages/common/footer')

var api = require('api')
var _util = require('util')

var tpl = require('./index.tpl')
require('./index.css')

var page = {
  
    init:function(){
        this.$elem = $('.cart-box')
        this.bindEvent()
    },

    bindEvent:function(){
        var _this = this
 
    },
}



$(function() {
    page.init()
})