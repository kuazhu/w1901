/*
* @Author: TomChen
* @Date:   2019-08-21 17:42:33
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-25 10:59:45
*/
require('pages/common/nav')
require('pages/common/search')
require('pages/common/footer')
var api = require('api')
var _util = require('util')

var tpl = require('./index.tpl')
require('./index.css')

var page = {
    productsListPrarms:{
        category:_util.getParamFromUrl('categoryId'),
        keyword:_util.getParamFromUrl('keyword'),
        page:_util.getParamFromUrl('page') || 1,
        orderBy:_util.getParamFromUrl('orderBy') || 'default',
    },    
    init:function(){
        this.loadProductList()
    },
    loadProductList:function(){
        api.getProductsList({
            data:this.productsListPrarms,
            success:function(result){
                if(result.list.length > 0){
                    var html = _util.render(tpl,{
                        list:result.list
                    })
                    $('.product-list-box').html(html)
                }else{
                    $('.product-list-box').html('<p class="empty-message">您找的商品去火星了!</p>')
                }
            }
        })
    },
}



$(function() {
    page.init()
})