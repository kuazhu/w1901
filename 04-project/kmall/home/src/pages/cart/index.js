/*
* @Author: TomChen
* @Date:   2019-08-21 17:42:33
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-26 11:46:43
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
                /*
                if(cart.cartList.length > 0){
                    var html = _util.render(tpl,cart)
                    _this.$elem.html(html)
                }else{
                    _this.$elem.html('<p class="empty-message">您的购物车空空如也!</p>') 
                }
                */
                _this.renderCart(cart)
            },
            error:function(){
                _this.showErrorPage()
            }
        })
    },
    renderCart:function(cart){
        if(cart.cartList.length > 0){
            var html = _util.render(tpl,cart)
            this.$elem.html(html)
        }else{
            this.$elem.html('<p class="empty-message">您的购物车空空如也!</p>') 
        }
    },
    showErrorPage:function(){
        this.$elem.html('<p class="empty-message">好像出错了,请稍后再试!</p>') 
    },
    bindEvent:function(){
        var _this = this
        //1.处理选择单个
        this.$elem.on('click','.select-one',function(){
            var $this = $(this)
            var productId = $this.parents('.product-item').data('product-id')
            //选中
            if($this.is(':checked')){
                api.updateCartsChoices({
                    data:{
                        productId:productId,
                        checked:true,
                    },
                    success:function(cart){
                        _this.renderCart(cart)
                    },
                    error:function(){
                        _this.showErrorPage()
                    }
                })
            }
            //取消
            else{
                api.updateCartsChoices({
                    data:{
                        productId:productId,
                        checked:false,
                    },
                    success:function(cart){
                        _this.renderCart(cart)
                    },
                    error:function(){
                        _this.showErrorPage()
                    }
                })
            }
        })
        //2.处理选择全部
        this.$elem.on('click','.select-all',function(){
            var $this = $(this)
            //选中
            if($this.is(':checked')){
                api.updateCartsChoices({
                    data:{
                        checked:true,
                    },
                    success:function(cart){
                        _this.renderCart(cart)
                    },
                    error:function(){
                        _this.showErrorPage()
                    }
                })
            }
            //取消
            else{
                api.updateCartsChoices({
                    data:{
                        checked:false,
                    },
                    success:function(cart){
                        _this.renderCart(cart)
                    },
                    error:function(){
                        _this.showErrorPage()
                    }
                })
            }
        })
        //3.处理删除单个
        this.$elem.on('click','.delete-one',function(){
            var $this = $(this)
            var productId = $this.parents('.product-item').data('product-id')
            //选中
            if(_util.showConfirm("您确定要删除该条商品吗?")){
                api.deleteCarts({
                    data:{
                        productId:productId,
                    },
                    success:function(cart){
                        _this.renderCart(cart)
                    },
                    error:function(){
                        _this.showErrorPage()
                    }
                })
            }
        })                
        //4.处理删除选中
        this.$elem.on('click','.delete-selected',function(){
            if(_util.showConfirm("您确定要删除选中的商品吗?")){
                api.deleteCarts({
                    success:function(cart){
                        _this.renderCart(cart)
                    },
                    error:function(){
                        _this.showErrorPage()
                    }
                })
            }
        }) 
    },
}



$(function() {
    page.init()
})