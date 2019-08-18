/*
* @Author: TomChen
* @Date:   2019-08-16 10:20:25
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-18 16:51:15
*/

export const SERVER = 'http://127.0.0.1:3000'

export const API_CONFIG = {
    login:                 ['/sessions/users','post'],
    logout:                ['/sessions/users','delete'],
    getCounts:             ['/counts','get'],
    getUserList:           ['/users/list','get'],
    addCategories:         ['/categories','post'],
    getlevelCategories:    ['/categories/levelCategories','get'],
    getCategoriesList:     ['/categories/list','get'],
    updateCategoriesName:  ['/categories/name','put'],
}