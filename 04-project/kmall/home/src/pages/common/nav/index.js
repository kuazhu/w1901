/*
* @Author: TomChen
* @Date:   2019-08-22 11:07:01
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-22 17:26:04
*/
require('./index.css')
var api = require('api')
var _util = require('util')
var page = {
    init:function(){
        this.loadUsername()
        this.bindEvent()
        return this
    },
    bindEvent:function(){
        $('#logout').on('click',function(){
            api.logout({
                success:function(){
                    window.location.reload()
                },
                error:function(msg){
                    _util.showErrorMsg(msg)
                }
            })
        })
    },
    loadUsername:function(){
        api.getUsername({
            success:function(data){
                $('.not-login').hide()
                $('.login').show()
                .find('.username')
                .text(data.username)
            }
        })
    }
}

module.exports = page.init()