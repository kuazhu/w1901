/*
* @Author: TomChen
* @Date:   2019-08-21 17:42:33
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-26 16:13:23
*/
require('pages/common/nav')
require('pages/common/search')
require('pages/common/footer')

var api = require('api')
var _util = require('util')

var shippingTpl = require('./shipping.tpl')
var productTpl = require('./product.tpl')
require('./index.css')

var page = {
  
    init:function(){
        this.$shippingBox = $('.shipping-box')
        this.$productBox = $('.product-box')
        this.loadShippingList()
        this.loadProductList()
    },
    loadShippingList:function(){
        var html = _util.render(shippingTpl)
        this.$shippingBox.html(html)
    },
    loadProductList:function(){
        var html = _util.render(productTpl)
        this.$productBox.html(html)
    }
}


$(function() {
    page.init()
})