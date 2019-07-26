/*
* @Author: TomChen
* @Date:   2019-07-26 16:52:36
* @Last Modified by:   TomChen
* @Last Modified time: 2019-07-26 16:54:05
*/
class Controller{
    index(req,res,...args){
        res.setHeader('Content-type',"text/html;charset=UTF-8")
        res.end('<a href="/Item/index">go ToDoList</a>')
    }
}

module.exports = new Controller()