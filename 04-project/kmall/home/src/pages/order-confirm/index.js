/*
* @Author: TomChen
* @Date:   2019-08-21 17:42:33
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-26 17:22:21
*/
require('pages/common/nav')
require('pages/common/search')
require('pages/common/footer')

var api = require('api')
var _util = require('util')
var _modal = require('./modal.js')

var shippingTpl = require('./shipping.tpl')
var productTpl = require('./product.tpl')
require('./index.css')

var page = {
  
    init:function(){
        this.$shippingBox = $('.shipping-box')
        this.$productBox = $('.product-box')
        this.loadShippingList()
        this.loadProductList()
        this.bindEvent()
    },
    loadShippingList:function(){
        var html = _util.render(shippingTpl)
        this.$shippingBox.html(html)
    },
    loadProductList:function(){
        var _this = this
        api.getOrdersProducts({
            success:function(result){
                if(result.cartList.length > 0){
                    var html = _util.render(productTpl,result)
                    _this.$productBox.html(html) 
                }else{
                   _this.$productBox.html('<p class="empty-message">购物车中还没有选中的商品!</p>')  
                }

            },
            error:function(){
               _this.$productBox.html('<p class="empty-message">获取商品列表好像出错了,请稍后再试!</p>') 
            }
        })
    },
    bindEvent:function(){
        //1.弹出添加地址面板
        this.$shippingBox.on('click','.shipping-add',function(){
            _modal.show()
        })
    }
}


$(function() {
    page.init()
})