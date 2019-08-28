/*
* @Author: TomChen
* @Date:   2019-08-21 17:42:33
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-28 16:31:40
*/
require('pages/common/nav')
require('pages/common/search')
var _side = require('pages/common/side')
require('pages/common/footer')
var tpl = require('./index.tpl')

require('./index.css')

var _util = require('util')
var api = require('api')

var page = {
    ordersDetailPrarms:{
        orderNo:_util.getParamFromUrl('orderNo') || '',
    },    
    init:function(){
        this.$elem = $('.order-box')
        this.renderSide()
        this.loadOrderDetail()
    },
    renderSide:function(){
        _side.render('order-list')
    },
    loadOrderDetail:function(){
        var _this = this
        api.getOrdersDetail({
            data:this.ordersDetailPrarms,
            success:function(order){
                _this.renderOrder(order)
            }
        })
    },
    renderOrder(order){
        if(order){
            order.createdTime = new Date(order.createdAt).toLocaleString()
            order.canPay = order.canCancel = order.status == 10
            console.log(order)
            var html = _util.render(tpl,order)
            this.$elem.html(html)
        }else{
            this.$elem.html('<p class="empty-message">您找的订单去火星了!</p>')
        }
    }
}



$(function() {
    page.init()
})