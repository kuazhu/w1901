/*
 * @Author: TomChen
 * @Date:   2019-08-21 17:42:33
 * @Last Modified by:   TomChen
 * @Last Modified time: 2019-08-23 11:49:50
 */
require('pages/common/nav')
require('pages/common/search')
var _side = require('pages/common/side')
require('pages/common/footer')

require('./index.css')

var _util = require('util')
var api = require('api')

var page = {
    init: function() {
        this.renderSide()  
    },
    renderSide:function(){
        _side.render('order-list')
    }

}

$(function() {
    page.init()
})