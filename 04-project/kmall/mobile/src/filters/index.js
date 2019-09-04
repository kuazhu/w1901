/*
* @Author: TomChen
* @Date:   2019-09-04 20:51:24
* @Last Modified by:   TomChen
* @Last Modified time: 2019-09-04 20:53:45
*/
export default {
    formatPrice(price=0){
        return '$'+parseFloat(price).toFixed(2)
    }
}