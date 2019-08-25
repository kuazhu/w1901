/*
* @Author: TomChen
* @Date:   2019-08-21 17:42:33
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-25 17:38:39
*/
require('pages/common/nav')
require('pages/common/search')
require('pages/common/footer')

var api = require('api')
var _util = require('util')

var tpl = require('./index.tpl')
require('./index.css')

var page = {
    productsDetailPrarms:{
        id:_util.getParamFromUrl('productId')
    },    
    init:function(){
        this.bindEvent()
        this.productsDetail()
    },

    bindEvent:function(){
        var _this = this
 
    },
    productsDetail:function(){
        if(!this.productsDetailPrarms.id){
            return
        }
        var _this = this
        api.getProductsDetail({
            data:this.productsDetailPrarms,
            success:function(product){
                if(product){
                    product.images = product.images.split(',')
                    product.activeImage = product.images[0]
                    console.log(product)
                    var html = _util.render(tpl,product)
                    $('.detail-box').html(html)
                }else{
                    $('.detail-box').html('<p class="empty-message">您找的商品去火星了!</p>')
                }
            }
        })
    },
}



$(function() {
    page.init()
})