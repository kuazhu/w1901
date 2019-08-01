/*
* @Author: TomChen
* @Date:   2019-07-31 16:03:32
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-01 10:12:21
*/
const querystring = require('querystring')

const express = require('express')
const bodyParser = require('body-parser')


const app = express()
const port = 3000

app.use(express.static('public'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/',(req,res)=>{res.send('get response data')})
app.post('/',(req,res)=>{
    // console.log(req.query)
    // console.log(req.params)
    /*
    let body = ''
    
    req.on('end',()=>{
        console.log(querystring.parse(body))    
    })

    req.on('data',(chunk)=>{
        body += chunk
    })
    */
    console.log(req.body)

    res.json({
        code:0
    })

})


app.listen(port, () => console.log(`app listening on port ${port}!`))