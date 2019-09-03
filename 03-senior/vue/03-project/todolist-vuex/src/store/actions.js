/*
* @Author: TomChen
* @Date:   2019-09-03 19:18:29
* @Last Modified by:   TomChen
* @Last Modified time: 2019-09-03 19:47:22
*/
//组件中用由this.$store.dispatch方法来派发action,
//action中用commit来提交mutation
//action中可以包含异步操作
export default {
    addTodo({commit},todo){
        commit('addTodo',todo)
    }
}