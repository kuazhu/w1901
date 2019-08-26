/*
* @Author: TomChen
* @Date:   2019-08-26 16:53:39
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-26 17:33:38
*/
var api = require('api')
var _util = require('util')
var _city = require('util/city')

var modalTpl = require('./modal.tpl')
module.exports = {
    show:function(){
        this.$elem = $('.modal-box')
        this.loadModal()
        this.bindEvent()
        this.loadProvinces()
    },
    loadModal:function(){
        var html = _util.render(modalTpl)
        this.$elem.html(html)
    },
    loadProvinces:function(){
        //加载省份列表
        var provinces = _city.getProvinces()
        var provincesSelectOptions = this.getSelectOptions(provinces)
        var $provinceSelect = this.$elem.find('.province-select')
        $provinceSelect.html(provincesSelectOptions)
    },
    loadCities:function(provinceName){
        //加载省份对应的城市
        var cities = _city.getCities(provinceName)
        var citiesSelectOptions = this.getSelectOptions(cities)
        var $citySelect = this.$elem.find('.city-select')
        $citySelect.html(citiesSelectOptions)
    },
    getSelectOptions:function(arr){
        var html = '<option value="">请选择</option>'
        for(var i = 0,length = arr.length;i<length;i++){
            html += '<option value="'+arr[i]+'">'+arr[i]+'</option>'
        }
        return html
    },
    hideModal:function(){
        this.$elem.empty()
    },
    bindEvent:function(){
        var _this = this
        //1.关闭弹出面板
        this.$elem.on('click','.close',function(){
            _this.hideModal()
        })
        //组织事件冒泡为了点击弹出面包中的其他地方不触发顶层的关闭事件
        this.$elem.on('click','.modal-container',function(ev){
            ev.stopPropagation()
        })
        //2.省份和城市的联动 
        this.$elem.on('change','.province-select',function(){
            _this.loadCities($(this).val())
        })       
    }
}