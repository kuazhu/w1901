/*
* @Author: TomChen
* @Date:   2019-08-09 10:53:03
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-11 16:38:49
*/
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App.js'

ReactDOM.render(<App />,document.getElementById('root'))

//虚拟DOM测试
/*
function tick(){
    const elem = (
        <div>
            <h1>hello</h1>
            <p>{new Date().toLocaleTimeString()}</p>
        </div>
    )
    ReactDOM.render(elem,document.getElementById('root'))
}
tick()
setInterval(tick,1000)
*/





