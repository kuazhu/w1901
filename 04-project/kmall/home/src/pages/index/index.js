/*
* @Author: TomChen
* @Date:   2019-08-21 17:42:33
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-23 16:16:12
*/
require('pages/common/nav')
require('pages/common/search')
require('pages/common/footer')

var api = require('api')
var _util = require('util')

require('./index.css')

var categoriesTpl = require('./categoriesTpl.tpl')

var page = {
    init:function(){
        this.loadHomeCategories()
    },
    loadHomeCategories:function(){
        api.getHomeCategories({
            success:function(categories){
                var html = _util.render(categoriesTpl,{
                    categories:categories
                })
                $('.categories').html(html)
            }
        })
    }
}



$(function() {
    page.init()
})
