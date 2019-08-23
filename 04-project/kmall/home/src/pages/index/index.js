/*
* @Author: TomChen
* @Date:   2019-08-21 17:42:33
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-23 16:42:58
*/
import Swiper from 'swiper'
require('pages/common/nav')
require('pages/common/search')
require('pages/common/footer')
require('swiper/dist/css/swiper.min.css')
var api = require('api')
var _util = require('util')

require('./index.css')

var categoriesTpl = require('./categoriesTpl.tpl')

var page = {
    init:function(){
        this.loadHomeCategories()
        this.loadSwiper()
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
    },
    loadSwiper(){
        var mySwiper = new Swiper ('.swiper-container', {
            loop: true, // 循环模式选项
            autoplay:true,
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
              clickable:true
            },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
        }) 
    }
}



$(function() {
    page.init()
})
