/*
* @Author: TomChen
* @Date:   2019-08-08 16:30:19
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-08 16:39:00
*/

const path = require('path')

module.exports = {
    //指定环境
    mode:'development',
    // mode:'production',
    //入口
    entry: './src/index.js',
    //出口
    output: {
        //「入口分块(entry chunk)」的文件名模板
        filename: 'bundle.js',
        //所有输出文件的目标路径
        path: path.resolve(__dirname, 'dist')
    }    
}