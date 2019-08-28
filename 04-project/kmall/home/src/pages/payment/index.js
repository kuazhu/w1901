/*
* @Author: TomChen
* @Date:   2019-08-21 17:42:33
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-28 11:42:09
*/
require('pages/common/nav')
require('pages/common/search')
require('pages/common/footer')

var api = require('api')
var _util = require('util')

var tpl = require('./index.tpl')
require('./index.css')

var page = {
    paymentsPrarms:{
        orderNo:_util.getParamFromUrl('orderNo')
    },    
    init:function(){
        this.$elem = $('.payment-box')
    },
}



$(function() {
    page.init()
})