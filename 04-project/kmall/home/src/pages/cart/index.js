/*
* @Author: TomChen
* @Date:   2019-08-21 17:42:33
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-26 10:44:26
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
        this.$elem = $('.cart .cart-box')
        this.loadCarts()
        this.bindEvent()
    },
    loadCarts:function(){
        var _this = this
        api.getCarts({
            success:function(cart){
                console.log(cart)
                if(cart.cartList.length > 0){
                    var html = _util.render(tpl,cart)
                    _this.$elem.html(html)
                }else{
                    _this.$elem.html('<p class="empty-message">您的购物车空空如也!</p>') 
                }
            },
            error:function(){

            }
        })
    },
    bindEvent:function(){
        var _this = this
 
    },
}



$(function() {
    page.init()
})