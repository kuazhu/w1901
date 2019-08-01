/*
* @Author: TomChen
* @Date:   2019-07-31 16:03:32
* @Last Modified by:   TomChen
* @Last Modified time: 2019-07-31 17:15:00
*/
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.all("/",(req,res,next)=>{
    console.log('do something...')
    next()
})

app.get('/', (req, res,next) => {
    console.log('do something for get request...')
    next()
},(req,res)=>{
   res.send('get response data!') 
})

app.post('/', (req, res) => res.send('post response data!'))
app.put('/', (req, res) => res.send('put response data!'))
app.delete('/', (req, res) => res.send('delete response data!'))

app.listen(port, () => console.log(`app listening on port ${port}!`))