/*
* @Author: TomChen
* @Date:   2019-08-22 16:20:08
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-23 09:08:14
*/
var API_CONFIG = {
    login:                       ['/sessions/users','post'],
    getUsername:                 ['/sessions/username','get'],
    logout:                      ['/sessions/users','delete'],
    register:                    ['/users','post'],
    checkUsername:               ['/users/checkUsername','get'],
}

module.exports = {
    API_CONFIG
}