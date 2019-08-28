/*
* @Author: TomChen
* @Date:   2019-08-21 17:42:33
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-28 09:53:43
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
        var _this = this
        api.getShippingsList({
            success:function(shippings){
                /*
                var html = _util.render(shippingTpl,{
                    shippings:shippings
                })
                _this.$shippingBox.html(html)
                */
               _this.renderShipping(shippings)
            }
        })
    },
    renderShipping(shippings){
        var html = _util.render(shippingTpl,{
            shippings:shippings
        })
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
        var _this = this
        //监听新增地址后获取最新数据
        this.$shippingBox.on('get-shippings',function(ev,shippings){
            _this.renderShipping(shippings)
        })
        //1.弹出添加地址面板
        this.$shippingBox.on('click','.shipping-add',function(){
            _modal.show()
        })
        //2.处理删除地址
        this.$shippingBox.on('click','.shipping-delete',function(){
            if(_util.showConfirm('您确定要删除该条地址吗?')){
                var $this = $(this)
                var shippingId = $this.parents('.shipping-item').data('shipping-id')
                api.deleteShippings({
                    data:{
                        id:shippingId
                    },
                    success:function(shippings){
                        _this.renderShipping(shippings)
                    }
                })
            }
        })
    }
}


$(function() {
    page.init()
})