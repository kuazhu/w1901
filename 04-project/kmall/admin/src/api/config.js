/*
* @Author: TomChen
* @Date:   2019-08-16 10:20:25
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-16 11:19:51
*/

export const SERVER = 'http://127.0.0.1:3000'

export const API_CONFIG = {
    login:        ['/sessions/users','post'],
    logout:       ['/sessions/users','delete'],
    getCounts:    ['/counts','get'],
}