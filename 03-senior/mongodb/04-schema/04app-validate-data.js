/*
 * @Author: TomChen
 * @Date:   2019-07-29 16:01:56
 * @Last Modified by:   TomChen
 * @Last Modified time: 2019-07-31 11:22:25
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
    UserModel.insertMany({
        name:"Leo",
        age:'19',
        major:"Art",
        phone:"13212344321"
    })
    .then(docs=>{
        console.log('insert users:',docs)
    })
    .catch(err=>{
        console.log('insert users err:',err.message)
    })
})