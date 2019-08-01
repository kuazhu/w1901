/*
* @Author: TomChen
* @Date:   2019-07-31 16:03:32
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-01 09:17:47
*/
const express = require('express')
const app = express()
/*
const usersRouter = require('./routes/users.js')
const blogsRouter = require('./routes/blogs.js')
*/
const port = 3000

app.use(express.static('public'))
app.use("/users",require('./routes/users.js'))
app.use("/blogs",require('./routes/blogs.js'))
/*
app.use("/users",usersRouter)
app.use("/blogs",blogsRouter)
*/
/*
app.get('/users', (req, res) => {res.send('get response data!')})
app.post('/users', (req, res) => res.send('post response data!'))
app.put('/users', (req, res) => res.send('put response data!'))
app.delete('/users', (req, res) => res.send('delete response data!'))

app.get('/blogs', (req, res) => {res.send('get response data!')})
app.post('/blogs', (req, res) => res.send('post response data!'))
app.put('/blogs', (req, res) => res.send('put response data!'))
app.delete('/blogs', (req, res) => res.send('delete response data!'))
*/

app.listen(port, () => console.log(`app listening on port ${port}!`))