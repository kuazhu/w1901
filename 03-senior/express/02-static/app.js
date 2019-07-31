/*
* @Author: TomChen
* @Date:   2019-07-31 16:03:32
* @Last Modified by:   TomChen
* @Last Modified time: 2019-07-31 16:26:45
*/
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

//app.use("/static",express.static('public'))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`app listening on port ${port}!`))