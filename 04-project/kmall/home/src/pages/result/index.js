/*
* @Author: TomChen
* @Date:   2019-08-21 17:42:33
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-23 10:11:20
*/
require('pages/common/logo')

require('pages/common/footer')
var _util = require('util')

require('./index.css')

$(function(){
    var type = _util.getParamFromUrl('type') || 'default'
    $('.'+type).show()
})