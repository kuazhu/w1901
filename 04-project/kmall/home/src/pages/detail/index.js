/*
* @Author: TomChen
* @Date:   2019-08-21 17:42:33
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-25 17:24:45
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
            success:function(result){
                console.log(result)
            }
        })
    },
}



$(function() {
    page.init()
})