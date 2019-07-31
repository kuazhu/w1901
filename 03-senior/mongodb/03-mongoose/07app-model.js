/*
 * @Author: TomChen
 * @Date:   2019-07-29 16:01:56
 * @Last Modified by:   TomChen
 * @Last Modified time: 2019-07-31 09:28:50
 */
const mongoose = require('mongoose')

const UserModel = require('./models/user.js')

//1.连接数据库
mongoose.connect('mongodb://localhost/kuazhu', { useNewUrlParser: true })

//获取db对象
const db = mongoose.connection

//连接数据库失败
db.on('error', (err) => {
    console.log('connection db error:',err)
    throw err
})

db.once('open', () => {
    console.log('connection db success')

    UserModel.distinct("major",{age:{$gt:130}}, (err, result) => {
        if (err) {
            console.log('distince user error:', err)
        } else {
            console.log(result)
        }
    })

})