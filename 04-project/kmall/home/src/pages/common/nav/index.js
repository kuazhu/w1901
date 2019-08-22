/*
* @Author: TomChen
* @Date:   2019-08-22 11:07:01
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-22 17:08:47
*/
require('./index.css')
var api = require('api')
var page = {
    init:function(){
        this.loadUsername()
        return this
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