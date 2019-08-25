/*
* @Author: TomChen
* @Date:   2019-08-22 16:20:08
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-25 10:48:19
*/
var API_CONFIG = {
    login:                       ['/sessions/users','post'],
    getUsername:                 ['/sessions/username','get'],
    logout:                      ['/sessions/users','delete'],
    register:                    ['/users','post'],
    checkUsername:               ['/users/checkUsername','get'],
    getUserinfo:                 ['/sessions/users','get'],
    updateUsers:                 ['/users','put'],
    
    getHomeCategories:           ['/categories/homeCategories','get'],
    getPositionAds:              ['/ads/positionAds','get'],
    getFloors:                   ['/floors','get'],
    
    getProductsList:             ['/products/list','get'],    
}

module.exports = {
    API_CONFIG
}