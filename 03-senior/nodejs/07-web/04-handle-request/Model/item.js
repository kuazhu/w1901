/*
* @Author: TomChen
* @Date:   2019-07-25 17:40:34
* @Last Modified by:   TomChen
* @Last Modified time: 2019-07-25 17:46:51
*/
const fs = require('fs')
const path = require('path')
const util = require('util')

const dataPath = path.normalize(__dirname+"/../data/item.json")

const readFile = util.promisify(fs.readFile)


async function get(){
    const data = await readFile(dataPath)
    const arr = JSON.parse(data)
    return arr
}

module.exports = {
    get
}