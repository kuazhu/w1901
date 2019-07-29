/*
* @Author: TomChen
* @Date:   2019-07-29 11:41:34
* @Last Modified by:   TomChen
* @Last Modified time: 2019-07-29 15:27:41
*/
const MongoClient = require('mongodb').MongoClient

const uri = "mongodb://127.0.0.1:27017"

const client = new MongoClient(uri, { useNewUrlParser: true })

const dbName = 'it'

//1.连接数据库
client.connect(err => {
    if(err){
        console.log('connect db error::',err)
        throw err
    }
    console.log('connect db success...')

    //生成db 如果数据库中有就切换,如果没有就新建
    const db = client.db(dbName)

    //生成集合 如果数据库中有就切换,如果没有就新建
    const collection = db.collection('users')

    //用collection去操作集合
    //1.新增
    /*
    collection.insertMany([{name:"Tom",score:100},{name:"Leo",score:88}],(err,result)=>{
        if(err){
            console.log('insertMany error:',err)
        }else{
            console.log('insertMany result:',result)
        }
        //关闭连接
        client.close()
    })
    */
    //2.查询
    /*
     collection.find({}).toArray((err,docs)=>{
        if(err){
            console.log('find error:',err)
        }else{
            console.log('find docs:',docs)
        }
        //关闭连接
        client.close()          
     })
     */
     /*   
     collection.find({score:{$gt:90}}).toArray((err,docs)=>{
        if(err){
            console.log('find error:',err)
        }else{
            console.log('find docs:',docs)
        }
        //关闭连接
        client.close()          
     })
     */
    //更新
    /*
    collection.updateOne({name:"Tom"},{$set:{score:200}},(err,result)=>{
        if(err){
            console.log('updateOne error:',err)
        }else{
            console.log('updateOne result:',result)
        }
        //关闭连接
        client.close()        
     })
     */
    //删除
    collection.deleteOne({name:"Tom"},(err,result)=>{
        if(err){
            console.log('deleteOne error:',err)
        }else{
            console.log('deleteOne result:',result)
        }
        //关闭连接
        client.close()        
     })  
})